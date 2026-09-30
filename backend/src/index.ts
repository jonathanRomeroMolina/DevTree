import colors from 'colors'
import server from './server';

const port = process.env.PORT || 4000; //Aqui le decimos que utilce el puerto 4000, si no hay un puerto definido en el entorno de la computadora

server.listen(port, () => {
    console.log(colors.blue.bold(`Servidor funcionando en el puerto ${port})`));
})

//En las interfaces cuando tenemos algunos o mas de dos cuando cambian se pueden utilizar con la palabra extends

