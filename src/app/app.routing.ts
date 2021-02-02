import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { InicioComponent } from './components/inicio/inicio.component';
import { DestacadosComponent } from './components/destacados/destacados.component';
import { InolvidablesComponent } from './components/inolvidables/inolvidables.component';
import { CamisetasComponent } from './components/camisetas/camisetas.component';

const appRoutes: Routes =[
    {path: '', component: InicioComponent},
    {path: 'Inicio', component: InicioComponent},
    {path: 'Destacados', component: DestacadosComponent},
    {path: 'Inolvidables', component: InolvidablesComponent},
    {path: 'Camisetas', component: CamisetasComponent},
    {path: '**', component: InicioComponent}
];
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);