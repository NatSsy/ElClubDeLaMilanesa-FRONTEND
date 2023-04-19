import { DiffMenus } from "../data-Mnus/DiffMenus";


//se va a encargar de filtrar el menu seleccionado
export const MenuSeleccion = (NombreMenu) =>{
return DiffMenus.filter((menu=> menu.categoria=== NombreMenu));
}