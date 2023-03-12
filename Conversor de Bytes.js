console.log("Digite o Número de Bytes");
function conversor(Bytes){
  let units = ["B", "KB", "MB", "GB", "TB"];
  let size = Bytes;
  let unit = units[0];
  for(const element of units){
    if(size/1024>=1){
      size /= 1024;
    }else{
      unit = element;
      break
    }
  }
  size = size.toFixed(2);
  console.log(size + " " + unit);
}