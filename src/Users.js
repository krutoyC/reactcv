module.exports=()=>{
    const usuarios={
        noticias=[]
    }
    const totalNoticias=20;
    for(i=0; i<totalNoticias; i++){
        usuarios.noticias.push({
            id:i,
            headline:`noticia${i}`,
            information:`adicional${i}`,
            image:`img${i}`

        })

    }
return usuarios
}