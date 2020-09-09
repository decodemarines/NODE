const os = require('os');

console.log(os.networkInterfaces()); // какой адрес у вас будет

// {
//     address: 'fe40::1412:4636:4138:f5a1',
//     netmask: 'ffff:ffff:ffff:ffff::',
//     family: 'IPv6',
//     mac: '62:5b:35:91:38:46',
//     scopeid: 13,
//     internal: false,
//     cidr: 'fe40::1412:4636:4138:f5a1/64'
// }


// MINE
// {
//     'Беспроводная сеть': [
//       {
//         address: 'fe80::5c0a:9b52:4abf:4bb',
//         netmask: 'ffff:ffff:ffff:ffff::',
//         family: 'IPv6',
//         mac: '08:3e:8e:ba:c3:6b',
//         internal: false,
//         cidr: 'fe80::5c0a:9b52:4abf:4bb/64',
//         scopeid: 6
//       },
//       {
//         address: '192.168.1.103',
//         netmask: '255.255.255.0',
//         family: 'IPv4',
//         mac: '08:3e:8e:ba:c3:6b',
//         internal: false,
//         cidr: '192.168.1.103/24'
//       }
//     ],
//     'Loopback Pseudo-Interface 1': [
//       {
//         address: '::1',
//         netmask: 'ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff',
//         family: 'IPv6',
//         mac: '00:00:00:00:00:00',
//         internal: true,
//         cidr: '::1/128',
//         scopeid: 0
//       },
//       {
//         address: '127.0.0.1',
//         netmask: '255.0.0.0',
//         family: 'IPv4',
//         mac: '00:00:00:00:00:00',
//         internal: true,
//         cidr: '127.0.0.1/8'
//       }
//     ]
//   }
// Сюда входят как физические интерфейсы так и виртуальные Докер например