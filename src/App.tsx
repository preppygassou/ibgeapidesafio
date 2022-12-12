import { ChangeEvent, useEffect, useState } from 'react'
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { geCountiesListsByStateUF, geCountydetails, getStatesLists } from './actions';
import "./App.css";

const App = () => {

  const [selectedStateUF, setSelectedStateUF] = useState("");
  const [selectedCounty, setSelectedCounty] = useState("");

  const stateList = useSelector((state: RootStateOrAny) => state.stateList);
  const {
    states,
    loading:loadingstates
  } = stateList;

  const countyList = useSelector((state: RootStateOrAny) => state.countyList);
  const {
    counties,
    loading:loadingConty
  } = countyList;

  const countyDetails = useSelector((state: RootStateOrAny) => state.countyDetails);
  const {
    county,
  } = countyDetails;

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(
      getStatesLists()
    );
  }, [dispatch])

  useEffect(() => {
    dispatch(
      geCountiesListsByStateUF(selectedStateUF)
    );
    if (selectedCounty) {
      dispatch(geCountydetails(selectedCounty));
    }
  }, [selectedStateUF, dispatch, selectedCounty])


  function handleSelectState(event: ChangeEvent<HTMLSelectElement>) {
    const state = event.target.value;
    setSelectedStateUF(state);
    setSelectedCounty("")
  }

  function handleSelectCounty(event: ChangeEvent<HTMLSelectElement>) {
    const county = event.target.value;
    setSelectedCounty(county);
  }

  return (
    <main>
      <div className="banner">
        <h1>Seletor de estado e município</h1>
      </div>
      <div className="container">
        <div className="col">
          <h2 className='col-title'>Filtre para obter os detalhes de um município</h2>
          <div className="select-container">
            <div className="select-wrapper">
              <div>
                Selecione um estado
              </div>
              <select name="uf" id="uf" onChange={handleSelectState} className="round">
                <option value="">Selecione</option>
                {states && states.map((uf: any) => (
                  <option key={uf.id} value={uf.sigla}>{uf.nome}</option>
                ))}
              </select>
            </div>
            <div className="select-wrapper">
              <div>
                Selecione um município
              </div>
              <select name="county" id="county" value={selectedCounty} onChange={handleSelectCounty} className="round">
                <option value="">Selecione</option>
                {counties && counties.map((county: any) => (
                  <option key={county.id} value={county.id}>{county.nome}</option>
                ))}
              </select>
            </div>
          </div>
          {loadingConty || loadingstates ? <div>carregando</div> : ""
          }
          {
            selectedCounty && county && <div className="city-info_container">
              <h2>Dados gerais de município</h2>
              <div className="city-info_card">
                <div className="city-info">
                  <div className="info-title">
                    Microrregião :
                  </div>
                  <div>{county.municipio?.microrregiao?.nome}</div>
                </div>
                <div className="city-info">
                  <div className="info-title">
                    Mesorregião :
                  </div>
                  <div>{county.municipio?.microrregiao?.mesorregiao?.nome}</div>
                </div>
                <div className="city-info">
                  <div className="info-title">
                    UF :
                  </div>
                  <div>{county.municipio?.microrregiao?.mesorregiao.UF?.nome}</div>
                </div>
                <div className="city-info">
                  <div className="info-title">
                    Região :
                  </div>
                  <div>{county.municipio?.microrregiao?.mesorregiao.UF?.regiao?.nome}</div>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </main>
  );
}
export default App;