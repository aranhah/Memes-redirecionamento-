
const links = ['https://www.youtube.com/watch?v=dQw4w9WgXcQ', 'https://www.youtube.com/watch?v=9Deg7VrpHbM', 'https://www.youtube.com/watch?v=ZZ5LpwO-An4', 'https://www.youtube.com/watch?v=j5a0jTc9S10', 'https://www.youtube.com/watch?v=QH2-TGUlwu4', 'https://www.youtube.com/watch?v=kJQP7kiw5Fk', 'https://www.youtube.com/watch?v=DLzxrzFCyOs', 'https://www.youtube.com/watch?v=2Z4m4lnjxkY', 'https://www.youtube.com/watch?v=EE-xtCF3T94', 'https://www.youtube.com/watch?v=GLmjfJyZ-iM'];

window.onload = function () {
  const destino = links[Math.floor(Math.random() * links.length)];
  window.location.href = destino;
};
