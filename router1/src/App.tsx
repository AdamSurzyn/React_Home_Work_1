import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigationzz from "./Navigation";
/*Stwórz routing aplikacji z następującymi podstronami:
/profiles -> podstrona dla administratora do podglądu użytkowników,
/profiles/:id -> podstrona pojedynczego profilu,
/profiles/add -> podstrona na dodawanie profilu,
/profiles/:id/edit - > podstrona do edycji profilu,
/shops -> strona pokazująca wszystkie sklepy w sieci sklepów.
/shops/:id -> strona detali sklepu,
/shops/add -> strona na dodawanie sklepu,
/shops/:id/edit -> strona na edytowanie sklepu
*/

function App() {
  return (
    <BrowserRouter>
      <Navigationzz></Navigationzz>
      <Routes>
        <Route element={<div>Main</div>} path="/"></Route>
        <Route path="profiles">
          <Route index element={<div>Profiles</div>}></Route>
          {/* <Route element={<div>Profiles</div>}> */}
          <Route path=":id" element={<div>/profiles/1</div>}>
            <Route path="edit" element={<div>profiles/1/edit</div>}>
              //Czemu to sie nie pojawia?
            </Route>
          </Route>
          <Route path="add" element={<div>/profiles/add</div>}></Route>
        </Route>
        <Route path="shops">
          <Route index element={<div>Shops</div>}></Route>
          <Route path=":id" element={<div>shops/1</div>}>
            <Route path="edit" element={<div>shops/1/edit</div>}></Route>
          </Route>
          <Route path="add" element={<div>/shops/add</div>}></Route>
        </Route>
        <Route element={<div>404</div>} path="*"></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
