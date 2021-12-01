setInterval(() => {
                   d = new Date();
                   htime = d.getHours();
                   mtime = d.getMinutes();
                   stime = d.getSeconds();
                   hrotan = 30*htime +mtime/2;
                   mrotan = 6*mtime;
                   srotan = 6*stime;

                   hour.style.transform = `rotate(${hrotan}deg)`;
                   minute.style.transform = `rotate(${mrotan}deg)`;
                   second.style.transform = `rotate(${srotan}deg)`;

}, 1000);