# To do List
<ul>
</ul>
<input type="text" placeholder="apa yang ingin dikerjakan" />
<button onclick="add()">Tambah</button>
<script>
let sel=x=>document.querySelector(x);let add=()=>{let k=document.createElement("li");let val=sel("input[type='text']").value;k.append(val);sel("ul").append(k);}
</script>