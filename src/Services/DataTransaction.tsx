export const getData = (code:any) => {
    var infoData={
      name:"",
      code:"",
      id:"",
      valor:"",
      carga:"",
      image:""

    };
    if (code == "ABCDS") {
      infoData.name="JUAN PEREZ";
      infoData.code="ABCDS";
      infoData.id= "1714616123";
      infoData.valor="50.00";
      infoData.carga="RECIBIR DINERO";
      infoData.image= "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=766&q=80";
    } else if (code == "VFSSS") {
      infoData.name="ROSA BELTRÁN";
      infoData.code="VFSSS";
      infoData.id="0976123123";
      infoData.valor= "20.00";
      infoData.carga="ENTREGAR DINERO";
      infoData.image=  "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80";
    } else if (code == "CDASF") {
      infoData.name="RICARDO LÓPEZ";
      infoData.code="CDASF"
      infoData.id="174223423";
      infoData.valor="15.00";
      infoData.carga="RECIBIR DINERO";
      infoData.image=  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80";
    }else if (code == "JML952") {
      infoData.name="JEREMY LEÓN";
      infoData.code="JML952"
      infoData.id="1714963095";
      infoData.valor="35.00";
      infoData.carga="ENTREGAR DINERO";
      infoData.image=   "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80";
  } else if (code == "DYS120") {
      infoData.name="DAYANA ALEJANDRA ROMÁN MALDONADO";
      infoData.code="DYS120"
      infoData.id="1778952013";
      infoData.valor= "120.00";
      infoData.carga="RECIBIR DINERO";
      infoData.image=   "https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80";
    }
    return infoData;
  };
  