$(function(){
  $('body').keypress((e)=>{
   let key = e.key

    if(key == 50){
     $('.modal').css('display','flex')
    }
    
  })  

  const dados = 
    [
      {prod:'Cartões de Visita', med:'9x5 cm' , cor:'4/0' , val: .069},
      {prod:'Folheto', med:'10x14 cm' , cor:'4/0' , val: .152},
    ]

  dados.map((i, index)=>{
    let sel = $('select')

    sel.append(`
      <option>
          ${i.prod}
      </option>
    `)
    sel.change(()=>{
     if(sel.val()==i.prod){
       let quant = $('.quant').val()
       let total = Math.round(i.val.toFixed(2) * quant) 
       $('.mostra tr').eq(1).html(`
          <td>
            ${quant}
          </td>
          <td>
            ${i.prod}
          </td>
          <td>
            ${total}
          </td>
       `)
     }
    })
    sel.val()
      
    
  })
   
  
})