$(document).ready(function(){
    console.log("main.js")
    console.log("phoneEmail = ", $('#phoneEmail'))
    setTimeout(function() { $("#phone").css('visibility','visible'); }, 1000);
    setTimeout(function() { $("#email").css('visibility','visible'); }, 1250);
    setTimeout(function() { $("#download").css('visibility','visible'); }, 1500);
    // jQuery methods go here...
    const side_bar = {"QUALIFICATIONS": ["Full Stack Web Developer", "Wix Velo certified Developer", "BEng Electrical Engineering", "Electrician"], "SKILLS": ["HTML, CSS, JS","dc & Crossfilter", "Bootstrap", "Python", "Django", "Flask", "SQL", "Database design and management", "Git", "Heroku", "Stripe", "AWS", "e-Commerce", "gSheets", "Fault finding / troubleshooting"], "PROJECTS": ["World Cup Wizard", "EPOS"], "REFERENCES": ["Padraig Cahill - Opus Web Design", "087 966 3260", "Cathal Dolan - gizagig", "086 679 4786"]}
    var entries = Object.entries(side_bar)
    // console.log(entries)
    // var headerList = Object.keys(side_bar);
    // console.log(headerList)
    // console.log(side_bar.length);
    let i = 0;
    let j = 0;
    let k = 0;
    let m = 0;
    let timer = setInterval(() => {
        if(i < entries.length) {
            if (j < entries[i][0].length && j==0) {
                $(`#${entries[i][0].toLowerCase()}`).append(`<h3>${entries[i][0][j]}</h3>`)
                j++
            }
            else if(j < entries[i][0].length && j!=0) {
                $(`#${entries[i][0].toLowerCase()}`).find("h3").append(`${entries[i][0][j]}`)
                j++
            }
            else {
                if(k < entries[i][1].length) {
                    // console.log("entries[i][1][k] = ", entries[i][1][k])
                    if(m < entries[i][1][k].length && m==0) {
                        $(`#${entries[i][0].toLowerCase()}`).append(`<p>${entries[i][1][k][m]}</p>`)
                        m++
                    }
                    else if(m < entries[i][1][k].length && m!=0) {
                        $(`#${entries[i][0].toLowerCase()}`).find("p:last-child").append(`${entries[i][1][k][m]}`);
                        m++;
                    }
                    else {
                        k++;
                        m = 0;
                    }  
                }
                else {
                    i++;
                    j = 0;
                    k = 0;
                    m = 0;
                }
            }
        }
        else {
            clearInterval(timer);
        }
    }, 15);



    // for (let item in headerList) {
    //     console.log("item =", headerList[item])
    //     // console.log(skills[item].length)
    //     let i = 0;
    //     let timer = setInterval(() => {
    //         if (i < headerList[item].length) {
    //             // console.log(headerList[item][i])
    //             $(`#${headerList[item]}`).find('span').append(headerList[item][i])
    //             i++
    //         }
    //         else {
    //             clearInterval(timer);
    //         }
    //         console.log("interval")
    //     }, 100);
    // }
});