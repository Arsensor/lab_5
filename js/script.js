let steps = [ //Массив со всеми этапами сюжета
  {
    text: "Алексей толкнул скрипучую дверь и вошел внутрь. В нос ударил\
    запах сырости и плесени. Внутри было темно, лишь слабый свет пробивался\
    сквозь щели в заколоченных окнах. Чуть дальше была видна потресканная дверь.", //Текст этапа
    image: "assets/images/step_2.jpg", //Изображение этапа
    choices: [ //Действия в этапе
      { text: "Открыть дверь", next_step: 1 }, //Переход на этап по ID
    ],
  },
  {
    text: "Войдя, он оказался в просторном холле. Потрескавшаяся штукатурка свисала со\
     стен, на полу валялись обломки мебели. В центре холла стояла массивная лестница,\
     ведущая на второй этаж. Справа от лестницы стоял письменный стол, на котором очень\
     давно пылились книги, но стояли они не очень ровно. Слева от лестницы, в стене, торчал\
     ржавый топор, успевший покрыться паутиной.",
    image: "assets/images/step_3.jpg",
    choices: [
      { text: "Обыскать стол", next_step: 2 },
      { text: "Извлечь топор", next_step: 3 },
    ],
  },
  {
    text: "Обыскав стол, Алексей нашел золотой ключ. Взяв его, он начал подниматься по\
     лестнице, внезапно Алексей услышал тихий шепот. Он огляделся, но никого не увидел.\
          Шепот, казалось, исходил из стен, буквально проходя через его плоть. Поднявшись,\
          перед ним оказалась закрытая дверь с замком, висящем на ручке.",
    image: "assets/images/step_4_k.jpg",
    choices: [
      { text: "Использовать ключ", next_step: 4 },
    ],
  },
  {
    text: "Успешно извлеченный топор оказался в руках Алексея. После чего, он начал подниматься по\
         лестнице, внезапно Алексей услышал тихий шепот. Он огляделся, но никого не увидел.\
          Шепот, казалось, исходил из стен, буквально проходя через его плоть. Поднявшись,\
          перед ним оказалась закрытая дверь с рамком, висящем на ручке.",
    image: "assets/images/step_4_t.jpg",
    choices: [
      { text: "Срубить замок", next_step: 5 },
    ],
  },
  {
    text: "За дверью оказалась пыльная комната с камином и сейфом. На каминной полке стояла старая\
         фотография. На ней была изображена семья: мужчина, женщина и маленький мальчик, а на обороте были\
          нацарапаны цифры. На столе Алексей увидел потрепанный дневник. Взяв его, открыл и начал читать.\
           Записи в нем были обрывочными, полными страха и отчаяния. Автор писал о странных звуках, движущихся\
            тенях и о том, что дом не хочет их отпускать. В дневнике также упоминался ритуал очищения, который\
             мог бы на время изгнать злые силы из дома. Для ритуала нужен был медальон, который, как написано в\
              дневнике, лежал в том самом сейфе и что-то личное от живого человека.",
    image: "assets/images/step_5.jpg",
    choices: [
      { text: "Вставить ключ, ввести цифры с фотографии, провернуть ключ", next_step: 6 },
    ],
  },
  {
    text: "За дверью оказалась пыльная комната с камином и сейфом. На каминной полке стояла старая\
         фотография. На ней была изображена семья: мужчина, женщина и маленький мальчик, а на обороте были\
          нацарапаны цифры. На столе Алексей увидел потрепанный дневник. Взяв его, открыл и начал читать.\
           Записи в нем были обрывочными, полными страха и отчаяния. Автор писал о странных звуках, движущихся\
            тенях и о том, что дом не хочет их отпускать. В дневнике также упоминался ритуал очищения, который\
             мог бы на время изгнать злые силы из дома. Для ритуала нужен был медальон, который, как написано в\
              дневнике, лежал в том самом сейфе и что-то личное от живого человека.",
    image: "assets/images/step_5.jpg",
    choices: [
      { text: "Попробовать разбить сейф топором", next_step: 7 },
    ],
  },
  {
    text: "Открыв сейф, Алексей увидел свисающий медальон, взяв его, он внезапно услышал шаги на втором\
         этаже. Звуки становились все ближе. Алексей понял, что не один в этом доме. Из-за угла лестницы\
          появилась тень. Она была бесформенной, изменчивой, словно сотканная из дыма. Тень медленно двигалась\
           в сторону Алексея. Он стал понимать, что ему необходимо действовать.",
    image: "assets/images/step_6_7.jpg",
    choices: [
      { text: "Рискнуть и провести ритуал", next_step: 8 },
      { text: "Спрятаться под стол", next_step: 9 },
      { text: "Бежать на выход", next_step: 10 },
    ],
  },
  {
    text: "Совершив неудачную попытку открытия сейфа, Алексей внезапно услышал шаги на втором\
         этаже. Звуки становились все ближе. Алексей понял, что не один в этом доме. Из-за угла лестницы\
          появилась тень. Она была бесформенной, изменчивой, словно сотканная из дыма. Тень медленно двигалась\
           в сторону Алексея. Он стал понимать, что ему необходимо действовать.",
    image: "assets/images/step_6_7.jpg",
    choices: [
      { text: "Атаковать топором", next_step: 11 },
      { text: "Спрятаться под стол", next_step: 9 },
      { text: "Бежать на выход", next_step: 10 },
    ],
  },
  {
    text: "Алексей решился на ритуал. Для этого он взял старинную фотографию из комнаты с камином,\
        медальон, а также личную вещь - наручные часы, которые подарил ему близкий друг.\
          Следуя инструкциям из дневника, он расставил предметы на столе, положив медальон\
           в центр круга. Он начал читать заклинание, написанное в дневнике. Дом содрогнулся,\
            тень заметалась по стенам, шепот усилился, превратившись в пронзительный крик. Внезапно\
             все стихло. Тень исчезла. Дом, казалось, опустел. Алексей почувствовал, как тяжесть свалилась\
              с его плеч. Он вышел из дома, и на этот раз лес не казался таким мрачным. Он нашел дорогу\
               домой. Но на следующий день Алексей узнал, что его друг, подаривший ему наручные часы,\
                погиб в автокатастрофе. Алексей понял, что ритуал забрал жизнь вместо его собственной.\
                 Он был свободен, но цена оказалась слишком высокой.", image: "assets/images/final_8.jpg", choices: [] //Концовка
  },
  {
    text: "Алексей прячется под старым пыльным столом. Тень входит в комнату. Она медленно движется,\
         исследуя пространство. Алексей затаивает дыхание, стараясь не издавать ни звука. Тень приближается\
          к столу. Алексей чувствует ее холодное дыхание. Шепот усиливается, он звучит прямо в голове Алексея,\
           нашептывая его страхи, сомнения, сожаления. Шепот пытается сломить его волю, заставить выйти из-под стола.\
            Время тянется бесконечно. Алексей не знает, сколько он пробыл под столом – минуты, часы, дни. Он боится\
             пошевелиться, боится выдать себя. В какой-то момент тень, не обнаружив его, покидает комнату. Алексей\
              дожидается, пока все стихнет, и выбирается из-под стола. Он находит окно, выбивает доски и сбегает\
               из дома", image: "assets/images/final_9.jpg", choices: [] //Концовка
  },
  {
    text: "Алексей, поддавшись инстинкту самосохранения, бросился к входной двери. Тень метнулась за ним,\
         ее холодное дыхание обожгло ему шею. Он выскочил из дома, споткнулся, упал, но тут же вскочил и побежал,\
          не оглядываясь. Бежал долго, пока не выбрался из леса. На дороге он увидел огни проезжающей машины. Его\
           подобрали, отвезли в ближайший город. Алексей так и не смог объяснить, что произошло в том доме. Он\
            пытался найти его снова, но лес выглядел совсем по-другому, а дома там не было. С тех пор Алексей\
             больше никогда не ходил в лес один. Он знал, что дом Потерянных Душ все еще существует, где-то там,\
              за гранью реальности, и ждет своих новых жертв.", image: "assets/images/final_10.jpg", choices: [] //Концовка
  },
  {
    text: "Алексей бросается на тень, нанося удар за ударом. Все они безуспешны, проходят сквозь тень, не\
         причиняя ей вреда. Она не реагирует на физическое воздействие. Тень обволакивает Алексея, проникая в\
          его сознание. Он чувствует леденящий холод, страх, отчаяние. Тень начинает питаться его жизненной силой.\
           Он не может сопротивляться. Его разум и тело слабеют. Он становится частью дома, его душа\
            поглощается тенью.", image: "assets/images/final_11.jpg", choices: [] //Концовка
  },
];
function update_text(id, text) { //Обновление текста этапа
  let element = document.getElementById(id);
  if (element) {
    element.textContent = text;
  }
}
function update_image(id, src) { //Обновление картинки этапа
  let element = document.getElementById(id);
  if (element) {
    element.src = src;
  }
}
function update_button(id, choices, on_choice) { //Обновление кнопок с действиями этапа
  let container = document.getElementById(id);
  if (container) {
    container.innerHTML = "";
    for (let i = 0; i < choices.length; i++) {
      let button = document.createElement("button");
      button.textContent = choices[i].text;
      button.className = "game_button";
      button.onclick = (function (next_step) {
        return function () {
          on_choice(next_step);
        };
      })(choices[i].next_step);
      container.appendChild(button);
    }
  }
}
function check_step(step_number) { //Обновление текста, картинки, кнопок
  let step = steps[step_number];
  update_text("gameText", step.text); //Вызов функции
  update_image("gameImage", step.image); //Вызов функции 
  update_button("gameChoices", step.choices, check_step); //Вызов функции
}
function start_game() { //Запуск игры
  document.getElementById("startButton").style.display = "none";
  document.getElementById("restartButton").style.display = "inline";
  check_step(0);
};
function restart_game() { //Перезапуск игры
  location.reload(); //Перезагрузка вкладки
};
document.getElementById("startButton").onclick = start_game;
document.getElementById("restartButton").onclick = restart_game;