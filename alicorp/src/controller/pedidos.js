export const agregarPedido = (producto, arrPedidos) => {
    //console.log('SOLO SE AGREGO EL PEDIDO');
    if (arrPedidos.find((p) => p.id === producto.id)) {
      // si ya lo pidio
      const newProductos2 = arrPedidos.map((p) => {
        if (p.id === producto.id) {
          return {
            ...p,
            cantidad: p.cantidad + 1,
            costo: p.price * (p.cantidad + 1)
          };
        } else {
          return p;
        }
      });
      //console.log('aaaaaaaa', newProductos2);
      // setPedidos(newProductos2);
      return newProductos2;
    } else {
      // si lo pide por primera vez
      const newProductos = [
        ...arrPedidos,
        {
          id: producto.id,
          name: producto.name,
          price: producto.price,
          menuType: producto.menuType,
          cantidad: producto.cantidad,
          costo: producto.costo
        }
      ];
      console.log(newProductos);
      // setPedidos(newProductos);
      return newProductos;
    }
  };