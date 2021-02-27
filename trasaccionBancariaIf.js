let bancoCliente = "Bancolombia";
let cuantaCliente = true;
let saldoCliente = 1000000;
let bancoDestino = "Bancolombia";
let cuentaDestino = true;
let horaDeTrasferencia = 15;
let trasferencia = "trasferencia realizada por un valor de ";
let horaFile =
  "la trasferencias se realizan entre las 9 y 12 o 15 y 20 gracias por su comprencion";
let constoTrasacion = "el costo de esta transaccion es de ";

let trasferir = 1000000;

// if (cuantaCliente && cuentaDestino) {
//   if (saldoCliente >= trasferir) {
//     if (bancoCliente === bancoDestino) {
//       console.log(constoTrasacion+0+'$');
//       if (
//         (horaDeTrasferencia <= 12 && horaDeTrasferencia >= 9) ||
//         (horaDeTrasferencia <= 20 && horaDeTrasferencia >= 15)
//       ) {
//         console.log(trasferencia + trasferir);
//       } else {
//         console.log(horaFile);
//       }
//     } else {
//       console.log(constoTrasacion + 100 + "$");
//       trasferir = trasferir - 100;
//       if (
//         (horaDeTrasferencia <= 12 && horaDeTrasferencia >= 9) ||
//         (horaDeTrasferencia <= 20 && horaDeTrasferencia >= 15)
//       ) {
//         console.log(trasferencia + trasferir);
//       } else {
//         console.log(horaFile);
//       }
//     }
//   } else {
//     console.log("tiene muy poco saldo en la cuenta");
//   }
// } else if (!cuantaCliente) {
//   console.log("cliente no esta verificado");
// } else {
//   console.log("Destino no esta verificado");
// }

let bancoCliente = "BANCOLOMBIA";
let bancoDestino = "BBVA";
let cuentaCliente = true;
let cuentaDestino = true;
let saldoCliente = 1000000;
let valorTransferencia = 1000000;
let horaTransferencia = 20;
let valorBancoDiferente = 100;

function operacion() {
  if (
    cuentaCliente &&
    cuentaDestino &&
    ((bancoDestino !== bancoCliente &&
      saldoCliente - valorTransferencia > valorBancoDiferente) ||
      (bancoDestino === bancoCliente &&
        saldoCliente - valorTransferencia >= 0) ) &&
    ((horaTransferencia >= 9 && horaTransferencia <= 12) ||
      (horaTransferencia >= 15 && horaTransferencia <= 20))
  ) {
    return "operación aceptada";
  } else {
    return "operación denegada";
  }
}

document.getElementById("demo").innerHTML = operacion();
