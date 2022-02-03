let input = document.querySelector("#word");
let select = document.querySelector("#select");
let button = document.querySelector("form button");
let resultBlock = document.querySelector(".result p");
let form = document.forms[0];

let vowel = ["а", "е", "ё", "и", "о", "у", "и", "ы", "э", "ю", "я"];
let nonvowel = ["б", "в", "г", "д", "з", "й", "к", "л", "м", "н", "п", "p", "с", "т", "ф", "х", "ц", "ч", "ь"];

function checkString(str) {
    let regexp = /^[а-яА-ЯёЁйЙъЪьЬ]+$/gi;
    return regexp.test(str);
}

function generate(str, selected) {
    let val = str.toLowerCase();
    let arrFromStr = val.split("");

    let lastIndex = val[val.length - 1];
    let vowelIndex = vowel.includes(lastIndex);
    let nonWovelIndex = nonvowel.includes(lastIndex);

    let isCorrect = checkString(val.trim());
    if(!isCorrect) {
        return new Error("Неккорректное значение. Пожалуйста, введите существительное без проблелов, цифр и дополнительных знаков на русском языке.");
    }

    if(val == "лев" || val == "лед"||val == "лен") {
        let index = arrFromStr.indexOf("е");
        val = `${val.substring(0, index)}ь${val.substring(index + 1, val.length)}`;
    }
    if(val.includes("ё")) {
        let index = arrFromStr.indexOf("ё");
        if(index != -1) {
            if(val == "лёд"||val == "лён"||val == "котёл") {
                val = `${val.substring(0, index)}ь${val.substring(index + 1, val.length)}`;
            } else {
                val = `${val.substring(0, index)}${val.substring(index + 1, val.length)}`
            }
        }
    }

    switch (selected) {
        case "именительный":
            return str;
        case "родительный":
                if(vowelIndex) {
                    if(lastIndex == "я") {
                        if(val[val.length - 2] == "и") {
                            return val.substring(0, val.length - 1) + "и";
                        }
                    }
                    if(lastIndex == "а" || lastIndex == "я") {
                        
                        if(val[val.length - 2] == "б"||val[val.length - 2] == "н"||val[val.length - 2] == "ц"||val[val.length - 2] == "р") {
                            return val.substring(0, val.length - 1) + "ы";
                        }
                        return val.substring(0, val.length - 1) + "и";
                    }
                    if(lastIndex == "е") {
                        return val.substring(0, val.length - 1) + "я";
                    }
                    if(lastIndex == "о") {
                        return val.substring(0, val.length - 1) + "а";
                    }
                    if(lastIndex == "и") {
                        return val.substring(0, val.length - 1) + "ов";
                    }
                    if(lastIndex == "у") {
                        return str;
                    }
                }

                if(nonWovelIndex) {
                    
                    if(lastIndex == "ь") {
                        console.log(val);
                        if(val == "день"||val == "пень"||val == "оборотень"||val == "трутень"||val == "бивень"||val == "парень"||val == "ремень"||val == "слизень"||val == "ливень"||val == "камень"||val == "перечень") {
                            let index = val.indexOf("е");
                            return val.substring(0, index) + val.substring(index + 1, val.length - 1) + "я";
                        }
                        if(val == "ясень"||val == "тюлень"||val == "олень"||val == "пользователь") {
                            return val.substring(0, val.length - 1) + "я";
                        }
                        return val.substring(0, val.length - 1) + "и";
                    }
                    if(lastIndex == "й") {
                        return val.substring(0, val.length - 1) + "я";
                    } else {
                        if(val == "лев") {
                            let index = arrFromStr.indexOf("е");
                            val = `${val.substring(0, index)}ь${val.substring(index + 1, val.length)}`;
                        }
                        if(val.includes("ец") && val.length > 4 && val != "наглец") {
                            let index = val.indexOf("ец");
                            val = val.substring(0, index) + "ц";
                        }
                    }
                    return val + "а";
                }
        case "дательный":
            if(vowelIndex) {

                if(lastIndex == "я") {
                    if(val[val.length - 2] == "и") {
                        return val.substring(0, val.length - 1) + "и";
                    }
                }
                if(lastIndex == "а" || lastIndex == "я") {
                    return val.substring(0, val.length - 1) + "e";
                }
                if(lastIndex == "о") {
                    return val.substring(0, val.length - 1) + "у";
                }
                if(lastIndex == "е") {
                    return val.substring(0, val.length - 1) + "ю";
                }

                if(lastIndex == "и") {
                    return val.substring(0, val.length - 1) + "ам";
                }

                if(lastIndex == "у") {
                    return str;
                }
            }

                if(nonWovelIndex) {

                    if(lastIndex == "ь") {
                        if(val == "день"||val == "пень"||val == "оборотень"||val == "трутень"||val == "бивень"||val == "парень"||val == "ремень"||val == "слизень"||val == "ливень"||val == "камень"||val == "перечень") {
                            let index = val.indexOf("е");
                            return val.substring(0, index) + val.substring(index + 1, val.length - 1) + "ю";
                        }
                        if(val == "ясень"||val == "тюлень"||val == "олень"||val == "пользователь") {
                            return val.substring(0, val.length - 1) + "ю";
                        }
                        return val.substring(0, val.length - 1) + "и";
                    }
                    if(lastIndex == "й") {
                        return val.substring(0, val.length - 1) + "ю";
                    } else {
                        if(val == "лев"||val == "лёд") {
                            let index = arrFromStr.indexOf("е");
                            val = `${val.substring(0, index)}ь${val.substring(index + 1, val.length)}`;
                        }
                        if(val.includes("ец") && val.length > 4 && val !== "наглец") {
                            let index = val.indexOf("ец");
                            val = val.substring(0, index) + "ц";
                        }
                        return val + "у";
                    }
                }
        case "винительный":
            if(vowelIndex) {
                if(lastIndex == "а") {
                    return val.substring(0, val.length - 1) + "у";
                }
                if(lastIndex == "я") {
                    return val.substring(0, val.length - 1) + "ю";
                }
                if(lastIndex == "о") {
                    return str;
                }
                if(lastIndex == "е") {
                    return str;
                }

                if(lastIndex == "и") {
                    return str;
                }

                if(lastIndex == "у") {
                    return str;
                }
            }

            if(nonWovelIndex) {
                if(val == "оборотень"||val == "трутень"||val == "бивень"||val == "парень"||val == "слизень") {
                    let index = val.indexOf("е");
                    return val.substring(0, index) + val.substring(index + 1, val.length - 1) + "я";
                }
                if(val == "тюлень"||val == "олень"||val == "пользователь") {
                    return val.substring(0, val.length - 1) + "я";
                }
                if(val == "козл"||val == "льв"||val == "льн") {
                    return val + "а";
                }
                if(val == "льд") {
                    return "лёд";
                }
                return str;
            }
        case "творительный":
            if(vowelIndex) {
                if(lastIndex == "а") {
                    if(val[val.length - 2] == "ж"||val[val.length - 2] == "ш"||val[val.length - 2] == "ц") {
                        return val.substring(0, val.length - 1) + "ей";
                    }
                    return val.substring(0, val.length - 1) + "ой";
                }
                if(lastIndex == "я") {
                        if(val[val.length - 2] == "и") {
                            return val.substring(0, val.length - 1) + "ей";
                        }
                    return val.substring(0, val.length - 1) + "ю";
                }
                if(lastIndex == "о") {
                    return val + "м";
                }
                if(lastIndex == "е") {
                    return val.substring(0, val.length - 1) + "м";
                }

                if(lastIndex == "и") {
                    return val.substring(0, val.length - 1) + "ами";
                }

                if(lastIndex == "у") {
                    return str;
                }
            }
            if(nonWovelIndex) {
                if(lastIndex == "ь") {
                    if(val == "день"||val == "пень"||val == "оборотень"||val == "трутень"||val == "бивень"||val == "парень"||val == "ремень"||val == "слизень"||val == "ливень"||val == "камень"||val == "перечень") {
                        let index = val.indexOf("е");
                        return val.substring(0, index) + val.substring(index + 1, val.length - 1) + "ем";
                    }
                    if(val == "ясень"||val == "тюлень"||val == "олень"||val == "пользователь") {
                        return val.substring(0, val.length - 1) + "ем";
                    }
                    return val + "ю";
                }
                if(lastIndex == "й") {
                    return val.substring(0, val.length - 1) + "ем";
                }
                return val + "ом";
            }
        case "предложный":
            if(vowelIndex) {
                if(vowelIndex != -1) {
                    if(lastIndex == "а") {
                        return val.substring(0, val.length - 1) + "е";
                    }
                    if(lastIndex == "я") {
                        if(val[val.length - 2] == "и") {
                            return val.substring(0, val.length - 1) + "и";
                        }
                        return val.substring(0, val.length - 1) + "е";
                    }
                    if(lastIndex == "о") {
                        return val.substring(0, val.length - 1) + "е";
                    }
                    if(lastIndex == "е") {
                        return str;
                    }
    
                    if(lastIndex == "и") {
                        return val.substring(0, val.length - 1) + "ах";
                    }
    
                    if(lastIndex == "у") {
                        return str;
                    }
                }
            }
            if(nonWovelIndex) {
                if(lastIndex == "ь") {
                    if(val == "день"||val == "пень"||val == "оборотень"||val == "трутень"||val == "бивень"||val == "парень"||val == "ремень"||val == "слизень"||val == "ливень"||val == "камень"||val == "перечень") {
                        let index = val.indexOf("е");
                        return val.substring(0, index) + val.substring(index + 1, val.length - 1) + "е";
                    }
                    if(val == "ясень"||val == "тюлень"||val == "олень"||val == "пользователь") {
                        return val.substring(0, val.length - 1) + "е";
                    }
                    return val + "и";
                }
                if(lastIndex == "й") {
                    return val.substring(0, val.length - 1) + "е";
                }
                return val + "е";
            }
        default:
            return str;
    }
}

function appendHandler(e) {
    e.preventDefault();
    let result = generate(input.value, e.target.select.value);
    resultBlock.textContent = result;
}

form.addEventListener("submit", appendHandler);