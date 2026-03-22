const teachers = [
  {name:"Xojiboyeva Ma’mura",subject:"Ingliz tili",result:"90 ball",level:"Oliy toifa",image:"https://i.postimg.cc/X7wjkS2b/IMG-2823.jpg"},
  {name:"Mamatov Zokir Asadullayevich",subject:"Matematika",result:"84 ball",level:"Navbatdan tashqari oliy toifa",image:"https://i.postimg.cc/zvn2LjqJ/IMG-2832.jpg"},
  {name:"Mamadaliyev Inoyatulla Orifjon o'g'li",subject:"Kimyo",result:"84 ball",level:"Navbatdan tashqari oliy toifa",image:"https://i.postimg.cc/gkxnPTcC/IMG-2833.jpg"}
];

function openPage(id){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  const page = document.getElementById(id);
  page.classList.add('active');
}

function goHome(){openPage('home');}

function toggleContent(id){
  const el=document.getElementById(id);
  el.style.display = (el.style.display==='block') ? 'none' : 'block';
}

function loadTeachers(){
  const container=document.getElementById('teachersContainer');
  container.innerHTML='';
  teachers.forEach(t=>{
    container.innerHTML+=`
      <div class="teacher-box">
        <div class="teacher-photo"><img src="${t.image}" alt="${t.name}"></div>
        <div class="teacher-info">
          <h3>${t.name}</h3>
          <p><b>Fan:</b> ${t.subject}</p>
          <p><b>Natija:</b> ${t.result}</p>
          <p><b>Toifa:</b> ${t.level}</p>
        </div>
      </div>
    `;
  });
}

function filterTeacher(subject){
  const container=document.getElementById('teachersContainer');
  container.innerHTML='';
  teachers.forEach(t=>{
    if(subject==='all' || t.subject===subject){
      container.innerHTML+=`
        <div class="teacher-box">
          <div class="teacher-photo"><img src="${t.image}" alt="${t.name}"></div>
          <div class="teacher-info">
            <h3>${t.name}</h3>
            <p><b>Fan:</b> ${t.subject}</p>
            <p><b>Natija:</b> ${t.result}</p>
            <p><b>Toifa:</b> ${t.level}</p>
          </div>
        </div>
      `;
    }
  });
}

// Sahifa o‘zgarganda teacherlarni yuklash
document.addEventListener("DOMContentLoaded", () => {
  if(document.getElementById('teachersContainer')) loadTeachers();
});