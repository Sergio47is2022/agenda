import 'core-js/stable';
import 'regenerator-runtime/runtime';

import Login from './modules/Login';//importa classe

const login= new Login('.form-login');//instancia classe 
const cadastro= new Login('.form-cadastro');// instancia classe
login.init();
cadastro.init();

