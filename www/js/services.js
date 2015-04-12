angular.module('starter.services', [])

.factory('MeuTreino', function(){

  var meuTreino = {
      responsavel: 'Will Smith',
      objetivo: 'Emagrecer',
      vencimento: '2015-05-10',
      exercicios: [
        {
          'grupo': 'A',
          'exercicios': [
            'Esteira: 40 minutos',
            'Bicicleta: 20 Minutos'
          ]
        },
        {
          'grupo': 'B',
          'exercicios': [
            'Voador: 10-2-3',
            'Supino: 10-2-3'
          ]
        }
      ]
    };

  return {
    getAll: function(){
      return meuTreino;
    }
  };

})

.factory('Aulas', function(){

  // var aulas = [
  //   {
  //     id: 1,
  //     name: 'Zumba',
  //     descricao: 'oiasioud asudioasu dioasudoiuas d'
  //   },
  //   {
  //     id: 2,
  //     name: 'TRX',
  //     descricao: 'oiasioud asudioasu dioasudoiuas d'
  //   },
  //   {
  //     id: 3,
  //     name: 'Kickboxing',
  //     descricao: 'oiasioud asudioasu dioasudoiuas d'
  //   },
  // ];

  var aulasWithHorarios = [
    {
      dia: 'Segunda-feira',
      weekday: 1,
      horarios: [
        {
          horario: '09:00',
          aulas: [
            {
              id: 1,
              name: 'Zumba',
              descricao: 'O daiyd asiudy asiudy asiuyd asiuydiuasyd iuasyd iuasy diuasy das'
            }
          ]
        },
        {
          horario: '11:00',
          aulas: [
            {
              id: 2,
              name: 'TRX',
              descricao: 'O daiyd asiudy asiudy asiuyd asiuydiuasyd iuasyd iuasy diuasy das'
            },
            {
              id: 4,
              name: 'Crossfit',
              descricao: 'O daiyd asiudy asiudy asiuyd asiuydiuasyd iuasyd iuasy diuasy das'
            }
          ]
        },
      ]
    },
    {
      dia: 'Quarta-feira',
      weekday: 3,
      horarios: [
        {
          horario: '10:00',
          aulas: [
            {
              id: 2,
              name: 'TRX',
              descricao: 'O daiyd asiudy asiudy asiuyd asiuydiuasyd iuasyd iuasy diuasy das'
            },
            {
              id: 3,
              name: 'Kickboxing',
              descricao: 'O daiyd asiudy asiudy asiuyd asiuydiuasyd iuasyd iuasy diuasy das'
            },
            {
              id: 4,
              name: 'Crossfit',
              descricao: 'O daiyd asiudy asiudy asiuyd asiuydiuasyd iuasyd iuasy diuasy das'
            }
          ]
        }
      ]
    }
  ];

  return {
    getAulasWithHorarios: function(){
      return aulasWithHorarios;
    },
    getAulas : function(){
      var aulas = [];
      aulasWithHorarios.forEach(function(dias){
        dias.horarios.forEach(function(horarios){
          horarios.aulas.forEach(function(aula){
            aulas.push(aula);
          });
        });
      });
      return aulas;
    }
  };

})

.factory('Comunicados', function(

) {
  var data = [
    {
      id: 1,
      text: 'Amanha não haverá aula',
      created: '2015-02-10 10:00:00'
    },
    {
      id: 2,
      text: 'Amanha não haverá aula de novo hahahah muitas risadas para cortas a linha',
      created: '2015-04-01 10:00:00'
    }
  ];

  return {
    getAll : function(){
      return data;
    }
  };
});
