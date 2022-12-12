import { ChangeEvent, useEffect, useState } from 'react'
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { getCountiesListsByStateUF, getCountydetails, getStatesLists } from './actions';
import "./App.css";

const App = () => {

  const [selectedStateUF, setSelectedStateUF] = useState("");
  const [selectedCounty, setSelectedCounty] = useState("");

  const county = useSelector((state: RootStateOrAny) => state.county);
  const {
    states,
    allCounties,
    singleCounty,
    loading
  } = county;


  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(
      getStatesLists()
    );
  }, [dispatch])

  useEffect(() => {
    dispatch(
      getCountiesListsByStateUF(selectedStateUF)
    );
    if (selectedCounty) {
      dispatch(getCountydetails(selectedCounty));
    }
  }, [selectedStateUF, dispatch, selectedCounty])


  function handleSelectState(event: ChangeEvent<HTMLSelectElement>) {
    const UF = event.target.value;
    setSelectedStateUF(UF);
    setSelectedCounty("")
  }

  function handleSelectCounty(event: ChangeEvent<HTMLSelectElement>) {
    const countyId = event.target.value;
    setSelectedCounty(countyId);
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
                {allCounties && allCounties.map((county: any) => (
                  <option key={county.id} value={county.id}>{county.nome}</option>
                ))}
              </select>
            </div>
          </div>
          {
          loading ? <div>carregando</div> : ""
          }
          {
            selectedCounty && singleCounty && <div className="city-info_container">
              <h2>Dados gerais de município</h2>
              <div className="city-info_card">
                <div className="city-info">
                  <div className="info-title">
                    Microrregião :
                  </div>
                  <div>{singleCounty.municipio?.microrregiao?.nome}</div>
                </div>
                <div className="city-info">
                  <div className="info-title">
                    Mesorregião :
                  </div>
                  <div>{singleCounty.municipio?.microrregiao?.mesorregiao?.nome}</div>
                </div>
                <div className="city-info">
                  <div className="info-title">
                    UF :
                  </div>
                  <div>{singleCounty.municipio?.microrregiao?.mesorregiao.UF?.nome}</div>
                </div>
                <div className="city-info">
                  <div className="info-title">
                    Região :
                  </div>
                  <div>{singleCounty.municipio?.microrregiao?.mesorregiao.UF?.regiao?.nome}</div>
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