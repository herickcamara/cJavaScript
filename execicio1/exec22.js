function jurosMensal(pagamento){
    switch(pagamento){
        case 1:
            return 100 + (100 *5/100)
            break
        case 2:
            return 100 + (100 *10/100)
             break
        case 3:return 100 + (100 *15 /100)
         break
        case 4:return 100 + (100*20/100)
         break
        case 5:return 100 + (100*25/100)
         break
        case 6:return 100 + (100*30/100)
         break
        case 7:return 100 + (100*35/100)
         break
        case 8:return 100 + (100*40/100)
         break
        case 9:return 100 + (100*45/100)
         break
        case 10:return 100 + (100*50/100)
         break
        case 11:return 100 + (100*55/100)
         break
        case 12:return 100 + (100*60/100)
         break
        

    }
}


for(i = 1; i <12; i++){
    console.log(jurosMensal(i))

}
