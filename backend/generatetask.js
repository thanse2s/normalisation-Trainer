let db_generate;
let shema_nr;
let taskArray;
let number_of_rows = 7;
let METAarr



const generade = async () => {

    taskArray = [];
    await fill_nf1_array();
    await fill_nnf_array();
    await fill_nf2_tables();
    await fill_nf3_tables();
}

const getGeneradeExample =  async (database,shema) => {
    /**
     * TODO:: SHEMA von Database nehmen
     *        SHEMA mit daten aus Database füllen
     */
    db_generate = database;
    shema_nr = shema;
    await generade();

    return taskArray;

}

const rand = (max) => {
    return Math.floor(Math.random()*max.length);
}

const checkIdExist = () => {}
const createNoAtomar = () => {}
const getData = (dataType) =>{

    let dataTypeArr = db_generate[dataType];
    return dataTypeArr[rand(dataTypeArr)]
    return dataType


}
const eliminateDuplicates = () => {}

const fill_nnf_array = () => {


    let nnf_header = db_generate.shematas[shema_nr]['nnf'];
    let nnf_arr = []
    taskArray[0]=[]

    for(let i=0;i<number_of_rows;i++){
        nnf_arr[i] = []
       for(let  j=0;j<nnf_header.length;j++){
           if(i==0){
               nnf_arr[i][j]=nnf_header[j];
           }
           else{
               let noAtomarAtt = (db_generate.shematas[shema_nr]['noAtomar'])
               if(noAtomarAtt==nnf_header[j])
                        nnf_arr[i][j]=METAarr[i][j]+" "+METAarr[i][j+1]
                   else
                        nnf_arr[i][j]=METAarr[i][j];
           }
       }
    }

    taskArray[0][0]=nnf_arr;

}


const fill_nf1_array = () => {

    let nnf_header = db_generate.shematas[shema_nr]['1nnf'];
    let nf_arr = []
    taskArray[1]=[]

    for(let i=0;i<number_of_rows;i++){
        nf_arr[i] = []
        for(let  j=0;j<nnf_header.length;j++){
            if(i==0){
                nf_arr[i][j]=nnf_header[j];
            }
            else{
                nf_arr[i][j]=getData(nnf_header[j]);
            }
        }
    }
    taskArray[1][0]=nf_arr;
    METAarr=nf_arr;



}
const fill_nf2_tables = () => {

    let nnf_header = db_generate.shematas[shema_nr]['2nnf'];
    let nf_arr = []
    let table_count=0;
    taskArray[2]=[]

    nnf_header.forEach((tables)=>{
        for(let i=0;i<number_of_rows;i++){
            nf_arr[i]=[]
            for(let j=0;j<tables.length;j++){
                if(i==0){
                    nf_arr[i][j]=tables[j]
                }
                    nf_arr[i][j]=METAarr[i][j];
            }
        }
        taskArray[2][table_count]=nf_arr
        table_count++;
    })

}

const fill_nf3_tables = () => {

    let nnf_header = db_generate.shematas[shema_nr]['3nnf'];
    let nf_arr = []
    let table_count=0;
    taskArray[3]=[]

    nnf_header.forEach((tables)=>{
        for(let i=0;i<number_of_rows;i++){
            nf_arr[i]=[]
            for(let j=0;j<tables.length;j++){
                if(i==0){
                    nf_arr[i][j]=tables[j]
                }
                    nf_arr[i][j]=METAarr[i][j]
            }
        }

        taskArray[3][table_count]=nf_arr
        table_count++;
    })

}


const get_example = () => {

    let test_example =  []
    let nnf =[
        ["persID", "name", "VorlID", "lecture", "room", "street"],
        ["13478", "Diloo", "1238", "Datenbanken", "B 431", "Am Schwimmbad"],
        ["13478", "Diloo", "1153", "Englisch I", "D 123", "Blechhammer"],
        ["12481", "Wilke", "1352", "Analysis", "C 231", "Blechhammer"],
        ["12496", "Schmidt", "1543", "Systemanalyse", "B 23", "Am Schwimmbad"],
        ["13477", "Grau", "1238", "Datenbanken", "B 431", "Am Schwimmbad"],
        ["13477", "Grau", "1352", "Analysis", "C 231", "Blechhammer"],
        ["12462", "Schmidt", "1421", "WWS I", "C 250", "Blechhammer"]
    ];
    let nf1 = [
        ["persID", "name", "VorlID", "lecture", "buildings","rooms", "street"],
        ["13478", "Diloo", "1238", "Datenbanken", "B"," 431", "Am Schwimmbad"],
        ["13478", "Diloo", "1153", "Englisch I", "D"," 123", "Blechhammer"],
        ["12481", "Wilke", "1352", "Analysis", "C"," 231", "Blechhammer"],
        ["12496", "Schmidt", "1543", "Systemanalyse", "B"," 23", "Am Schwimmbad"],
        ["13477", "Grau", "1238", "Datenbanken", "B"," 431", "Am Schwimmbad"],
        ["13477", "Grau", "1352", "Analysis", "C"," 231", "Blechhammer"],
        ["12462", "Schmidt", "1421", "WWS I", "C"," 250", "Blechhammer"]
    ];
    let nf2_student = [
        ["name","Matrk"],
        ["Dilloo","13478"],
        ["Wike","12481"],
        ["Schmidth","12496"],
        ["Grau","13477"],
        ["Schmidt","12462"]
    ]
    let nf2_belegungsplan = [
        ["Matrk","Lv-Nr","Lehrveranstaltung"],
        ["13478","1238","Datenbanken"],
        ["13478","1153","English I"],
        ["12481","1352","Analysis"],
        ["12496","1543","Systemanalyse"],
        ["13477","1238","Datenbanken"],
        ["13477","1352","Analysis"],
        ["12462","1421","WWS I"]
    ]
    let nf2_lehrveranstalltung = [
        [ "VorlID", "buildings","rooms", "street"],
        ["1238", "B"," 431", "Am Schwimmbad"],
        ["1153", "D"," 123", "Blechhammer"],
        ["1352",  "C"," 231", "Blechhammer"],
        ["1543", "B"," 23", "Am Schwimmbad"],
        ["1421",  "C"," 250", "Blechhammer"]
    ]
    let nf3_student = [
        ["name","Matrk"],
        ["Dilloo","13478"],
        ["Wike","12481"],
        ["Schmidth","12496"],
        ["Grau","13477"],
        ["Schmidt","12462"]
    ]
    let nf3_belegungsplan = [
        ["Matrk","Lv-Nr","Lehrveranstaltung"],
        ["13478","1238","Datenbanken"],
        ["13478","1153","English I"],
        ["12481","1352","Analysis"],
        ["12496","1543","Systemanalyse"],
        ["13477","1238","Datenbanken"],
        ["13477","1352","Analysis"],
        ["12462","1421","WWS I"]
    ]
    let nf3_lehrveranstalltung = [
        [ "VorlID", "buildings","rooms"],
        ["1238", "B"," 431"],
        ["1153", "D"," 123"],
        ["1352",  "C"," 231"],
        ["1543", "B"," 23"],
        ["1421",  "C"," 250"]
    ]
    let nf3_gebauede = [
        [ "buildings", "street"],
        [ "B", "Am Schwimmbad"],
        [ "D", "Blechhammer"],
        [ "C", "Blechhammer"],
        ["B", "Am Schwimmbad"],
        ["C", "Blechhammer"]
    ]

    test_example[0] = [];
    test_example[0][0]=nnf;
    console.log(nnf);

    test_example[1] = []
    test_example[1][0]=nf1;

    test_example[2]=[]
    test_example[2][0]=nf2_student;
    test_example[2][1]=nf2_belegungsplan
    test_example[2][2]=nf2_lehrveranstalltung;

    test_example[3] = []
    test_example[3][0] = nf3_student
    test_example[3][1] = nf3_belegungsplan
    test_example[3][2] = nf3_lehrveranstalltung
    test_example[3][3] = nf3_gebauede

    return test_example;
}


