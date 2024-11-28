import React from "react";
import "./index.css";
import story from "../assets/story.png";
import { Link } from "react-router-dom";
import homeicon from "../assets/homeicon.png";
import logo from "../assets/logo.png";
import Footer from "./Footer";
import { interactCall } from "../services/callTelemetryIntract";

const Data = [
  {
    id: 1,
    avatar: "eidgah",
    title: "Eidgah",
    story: {
      val: [
        "How wonderful and beautiful was the morning of Eid!",
        "The trees looked greener, the field more festive, the sky had a lovely pink glow.",
        "The sun seemed brighter and more dazzling than before to wish the world a very happy Eid.",
        "The village was filled with excitement. Everyone was up early to go to the Eidgah.",
        "The boys were more excited than the others. They had been talking about it all the time.",
        "Finally the day had come. And now they were impatient.",
        "They were taking their treasure out of their pockets, counting and recounting it before putting it back.",
        "Mahmood counted “One, two, ten, twelve”– he had twelve coins. Mohsin had “One, two, three, eight, nine, fifteen” coins. With this money, they would buy countless things: toys, sweets, paper-pipes, rubber balls – and much more.",
        "The happiest of the boys was Hamid. He was only four, thin and poorly dressed.",
        "Last year his father had died of cholera. Then his mother also died. From then Hamid lived with his old Granny Ameena and was as happy as a lark.",
        "She told him that his father had gone to earn money. And that his mother had gone to Allah to get lovely gifts for him.",
        "This made Hamid very happy. Hamid had no shoes on his feet; the cap on his head was soiled and tattered.",
        "He knew that his father would come back with sacks full of silver and his mother with gifts from Allah.",
        "Then he would have more than Mahmood, Mohsin, Noorey and Sammi.",
        "Hamid’s Granny Ameena was sad. It was Eid and she did not have even a handful of grains. If only her son were there, it would have been a different kind of Eid!",
        "Hamid went to his grandmother and said, “Granny, I will be the first to get back. Don’t worry!” Ameena was worried.",
        "Other boys were going out with their fathers. How could she let him go to the fair all by himself?",
        "Hamid left with the other boys. Hamid was like one with wings on his feet. They ran on ahead of the elders and waited for them under a tree.",
        "They reached the suburbs of the town. On both sides of the road were big houses of the rich.",
        "In the gardens, mango and leechee trees were full of fruits. Then they came across the stores of the sweets - vendors.",
        "All decorated so gaily! Every store had sweets piled up in heaps like mountains.",

      ]
    },
    lang: 'en'

  },
  {
    id: 2,
    avatar: "sweet_sour",
    title: "Sweet & Sour",
    story: {
      val: [
        "Why is sea water salty, It is salty because there is salt in the sea",
        "Why is the chocolate sweet, It is sweet because there is sugar in it",
        // "Why is a lime sour, The acid in the lime makes it sour",
        // "Is there salt in tears, Yes there is",
        // "Is there sugar in a mango, Yes there is sugar in ripe mango",
        // "Is there acid in curd, Yes there is some acid in curd"
      ]
    },
    lang: 'en'

  },
  {
    id: 3,
    avatar: "satya",
    title: "SATYA, WATCH OUT!",
    story: {
      val: [
        "SATYA, WATCH OUT!",
        "Satya can’t stay still. He runs and jumps and spins and rolls and falls!",
        "'Sit quietly for a minute!' says Appa. 'If you get hurt, don’t come crying to me, ' says Akka.",
        "'Don’t you dare break anything!' says Thaatha. 'You're disturbing the class,' says his teacher.",
        "But what can Satya do if his hands and legs are always dancing?",
        "Today is Sunday. It’s Satya’s favourite day of the week — the day he goes to the farm where Amma works.",
        "It’s a long walk to the farm, through secret up-and-down paths, open fields, thick forests and gently flowing streams.",
        "Satya hops like a hare and sprints like a deer.'The mud is squishy. Be careful!' says Amma.",
        "He crawls like a centipede and slithers like a snake. 'Look out for thorns!' says Amma.",
        "He swings like a spider and leaps like a langur. 'Wheeeee!' 'Use the strong branches, my little monkey,' says Amma.",
        "He paddles like a duck and swims like a frog. 'Stay in the shallows, okay?' says Amma.",
        "He climbs like a lizard and jumps like a goat. 'Don’t slip!' says Amma.",
        "Satya flaps his arms like wings and tries to fly away. He imagines himself soaring and gliding like a vulture.",
        "Late in the evening, when the sun sets and crickets begin to hum, it’s time to go home. Tired Satya climbs on to his mother's back. They return through the up-and-down paths, fields, forests and streams.",
        "At home, Appa, Akka and Thaatha take one look at bruised and muddy Satya, and burst into laughter.",
        "Thaatha bathes him. Appa cooks him dinner. Akka tells him his favourite story as he falls asleep.",
        "In his dreams, Satya runs and jumps and spins and rolls",
        "and flies away!",
        "How do they move? Oh, the way Satya moves! Did you know that animals, birds and insects also move in many different ways and for different reasons? Like us, they move mainly to find delicious food, a cozy home and a warm family. Some of them also move to escape from being caught and eaten by other animals. Find out how some of these creatures move!",
        "Dolphins are famous for how they leap out of water. Can you leap? Cheetahs are the fastest land animals. They can run really fast and sprint too, especially when they hunt. Can you sprint?",
        "Crabs can walk sideways. Can you walk sideways? Grasshoppers can jump really high, especially when they want to escape from being eaten. Can you jump really high?Grasshoppers can jump really high, especially when they want to escape from being eaten. Can you jump really high? Snails crawl. Slowly. Very, very slowly. Can you crawl slowly?"
      ]
    },
    lang: 'en'
  },
  {
    id: 4,
    avatar: "cat",
    title: "It's All the Cat's Fault!",
    story: {
      val: [
        "Why haven’t you done your homework? Miss, it’s all the cat’s fault.",
        "If she had not got stuck on the tree, I would not have taken the ladder to climb it.",
        "If I had not taken the ladder to climb it, I would not have needed to fix it. If I had not needed to fix it, I wouldn’t have woken up the baby.",
        "If I had not woken up the baby, my mother would not have rushed out of the kitchen. If my mother had not rushed out of the kitchen, the monkey would not have got in.",
        "If the monkey had not got in, he would not have eaten up all the food. If he had not eaten up all the food, my father would not have bought rotis and chicken curry at the tea-shop.",
        "If my father had not bought rotis and chicken curry at the tea-shop, the dog would not have followed him home.",
        "If the dog had not followed him home, he would not have eaten my homework.",
        "So, you’re saying the dog ate your homework?",
        "Yes, Miss, it’s all the cat’s fault!",
      ]
    },
    lang: 'en'
  },
  {
    "id": 5,
    "avatar": "cat",
    "title": "ಇಲಿ ಮತ್ತು ಬೆಕ್ಕು",
    "story": {
      "val": [
        "ಒಂದು ಇಲಿ ಇತ್ತು",
        "ಒಂದು ಬೆಕ್ಕು ಇತ್ತು, ಬೆಕ್ಕು ಇಲಿಯನ್ನು ನೋಡಿತು",
        "ಬೆಕ್ಕು ಇಲಿಯ ಹಿಂದೆ ಓಡಿತು", "ಇಲಿ ಭಯದಿಂದ ಓಡಿತು",
        "ಜಾಣ ಇಲಿ ಬಿಲದೊಳಗೆ ಸೇರಿತು", "ಪಾಪ, ಬೆಕ್ಕು ಬಿಲದ ಹೊರಗೆ ಉಳಿಯಿತು",
        "ಕಾರಣ ಬಿಲವು ಚಿಕ್ಕದಾಗಿತ್ತು"
      ]
    },
    "lang": "kn"
  }, {
    "id": 6,
    "avatar": "found",
    "title": "ಅಳಿಲು",
    "story": {
      "val": [
        "ನಮ್ಮ ಮನೆಯ ಅಂಗಳದೊಳು ಒಂದು ಮರವಿದೆ",
        "ಮರದ ತುಂಬ ಕೊಂಬೆಗಳಿವೆ",
        "ಕೊಂಬೆಯ ಮೋಲೊಂದು ಅಳಿಲು",
        "ಅಳಿಲಿನ ಬೆನ್ನಿನ ಮೇಲೆ ಮೂರು ಪಟ್ಟೆ",
        "ಅಳಿಲು ಸರಸರನೆ ಮರದೊಳು ಓಡಾಡುವುದು",
        "ನಮ್ಮ ಬೆಕ್ಕು ಕೆಳಗೆ ಕೂತು ಹೊಂಚು ಹಾಕುವುದು",
      ]
    },
    "lang": "kn"
  },
  //  {
  //   "id": 7,
  //   "avatar": "found",
  //   "title": "ಸಂಪಿಗೆ ಹೂ",
  //   "story": {
  //     "val": [
  //       "ಸರಸಳ ಮನೆಯ ಹಿತ್ತಲಿನೊಳು ಸಂಪಿಗೆ ಮರವಿದೆ",
  //       "ಮರದ ತುಂಬಾ ಸಂಪಿಗೆ ಹೂ ಅರಳಿವೆ",
  //       " ಘಮಘಮ ಪರಿಮಳವ ಬೀರುತಿವೆ",
  //       "ಸರಸಳ ಅಜ್ಜಿ ಸಂಪಿಗೆಯ ಮಾಲೆ ಮಾಡಿದರು",
  //       "ಸರಸ ಮಾಲೆ ಮುಡಿದು ಶಾಲೆಗೆ ಬಂದಳು",
  //       "ಈಗ ತರಗತಿಯ ತುಂಬ ಸಂಪಿಗೆಯ ಘಮಘಮ!"
  //     ]
  //   },
  //   "lang": "kn"
  // },
  // {
  //   id: 5,
  //   avatar: "letter",
  //   title: "லெட்டர்",
  //   story:
  //   {
  //     val: [
  //       "மேரி பெட்டியைத் திறந்தாள். அட்டை ஒன்று இருந்தது.",
  //       "இது என்ன?",
  //       "இது லெட்டர்.",
  //       "பாட்டி, இது லெட்டர் என்றாள்.",
  //       "இது உன் அப்பா எழுதுனலெட்டர்",
  //       "இது என் அப்பா எழுதுனலெட்டர் என்றாள் ஆமாம், ஆமாம். ஹாஸ்டலில் படிக்கும் போோது உன் அப்பா எழுதுன லெட்டர் என்றார் தாத்தா.",
  //       "இது அப்பா ஹாஸ்டலில் படிக்கும்  போது எழுதுனலெட்டர் என்றாள். ஆமாம், ஆமாம். உன் அப்பா திருச்சி ஹாஸ்டலில்  படித்தார். அப்போ எழுதுனலெட்டர் என்றார் அத்தை.",
  //       "இது என் அப்பா எழுதுனலெட்டர்.  திருச்சியில் ஹாஸ்டலில் படிக்கும் போோது என்றாள். நானும் உன் அப்பாவும் திருச்சியில்  படித்தோம். 10 ஆம் வகுப்பு படிக்கும்  போது எழுதுனலெட்டர் என்றார் மாமா",
  //       "இது என்ன தெரியுமா?  லெட்டர். என் அப்பா எழுதுனலெட்டர். அப்பா திருச்சி ஹாஸ்டலில்  படிக்கும் போது எழுதுனலெட்டர். அப்பாவும் மாமாவும் பத்தாவது  படிக்கும்போது எழுதுனலெட்டர் என்றாள்.",
  //       "இது என்ன தெரியுமா?  லெட்டர். என் அப்பா எழுதுனலெட்டர். அப்பா திருச்சி ஹாஸ்டலில் படிக்கும்  போோது எழுதுனலெட்டர். அப்பாவும் மாமாவும் பத்தாவது  படிக்கும்போது எழுதுனலெட்டர். வா! வந்து பார் என்றாள்.",
  //       "“அப்பா! அப்பா! இது என்ன தெரியுமா?  லெட்டருப்பா! நீங்க எழுதுனலெட்டர்.  நீங்க பேனாவில் எழுதுனலெட்டர். நீங்க திருச்சி ஹாஸ்டலில் படிக்கும் போது எழுதுனது. நீங்களும் மாமாவும் பத்தாவது  படிக்கும்போது எழுதுனலெட்டர்  என்றாள்.",
  //       "ஆமாம். இது நான் எழுதுனலெட்டர்.  நான் திருச்சி ஹாஸ்டலில் படிக்கும்  போது எழுதுனலெட்டர். நான் பத்தாவது படிக்கும்போது  எழுதுனலெட்டர் என்றார் அப்பா.",
  //       "உனக்குப் படிக்கிறேன் கேள்  என்று படித்துக் காட்டினார். அன்புள்ள அம்மா அப்பா அவர்களுக்கு...",
  //       "நானும் லெட்டர் எழுதுவேன். அன்புள்ள அப்பாவுக்கு... என்று  நானும் லெட்டர் எழுதுவேன். பத்தாவது படிப்பேன். படிக்கும்போது லெட்டர்  எழுதுவேன்.",
  //       "நான் லெட்டர் எழுதுவேன். அன்புள்ள அம்மாவுக்கு... என்று லெட்டர் எழுதுவேன். பத்தாவது படிப்பேன். படிக்கும்போது லெட்டர் எழுதுவேன். இதோ, இந்த லெட்டரைப் போல் லெட்டர் எழுதுவேன்",
  //       "உங்களுக்கும் லெட்டர் எழுத ஆசை வருதா? யாருக்கு எழுதப் போறீங்க?",
  //     ]
  //   },
  //   lang: 'ta'
  // },
  // {
  //   id: 6,
  //   avatar: "Azhaguthaan",
  //   title: "வித்தியாசம் தான் அழகு",
  //   story: {
  //     val: [
  //       "ஏ.. ராமு.. என்னாச்சு! பல்லு விழுந்திருச்சு! ‘ஓட்டப் பல்லு’.. சொல்றாங்க இப்பதான் வித்தியாசமா இருக்க. ஓட்டப் பல்லும் அழகுதான். சிரி பாக்கலாம்!",
  //       "என்ன ராணி? கண்ணாடி போட்டிருக்கேன் வகுப்பில் பாரு.  யாரும் போடலை.  நீ மட்டும் தான்.  வித்தியாசமா இருக்க.  இதுவும் அழகுதான்!",
  //       "சொல்லு கண்மணி!  எனக்கு இனிப்பே பிடிக்காது. கசப்பு தான் பிடிக்கும்.  பாவக்காய்க் குழம்பு வச்சா... நிறைய சோறு தின்பேன். அட... பிடிச்சதைப் பேசுற!  வித்தியாசமா இருக்க.  இப்படியே இரு!",
  //       "என்ன மாதப்பா? சந்தோசமா இருந்தால்  ‘டான்ஸ்’ ஆடுவேன்.  நேற்று தெருவில் ஆடிட்டேன்’’ அட... நீ வெளிப்படையா இருக்க! வித்தியாசமா இருக்க.  நல்லா ஆடு.",
  //       "என்ன மசனி?  என் பேர் சொல்லி சிரிக்கிறாங்க! உன் பேர் இங்ககே புதுசு. வித்தியாசமா இருக்கு.  அதானே அழகு.  சந்தோசப்படு மசனி.",
  //       "என்னாச்சு லதா? ஓட்டப் பந்தயம். நான் தான் கடைசி. கடைசியா வருவதும் அழகு தான். வித்தியாசமாக இரு.",
  //       "பாண்டிக்கு என்ன? “இடது கையில் தான் சாப்பிடுறேன். இடது கையில் எழுதுறேன். எதையும் இடது கையில் செய்றேன்” அதனால் என்ன?  இடது கையில் அழகா எழுதுற. வகுப்பில் பாரு. உன்போல் யாரும் இல்லை. நீ வித்தியாசமா இருக்க. இதுவும் அழகுதான்.",
  //       "சொல்லு வாணி! நான் குண்டா இருக்கேன்.  அதனால் என்ன? உடம்பைக் குறைக்கணும்.  இப்ப நீ வித்தியாசமா இருக்க. இதுவும் அழகுதான்!",
  //       "என்னாச்சு குமாரி? எனக்குப் பிடிக்கலை.  'நோ' சொன்னேன். அப்பா திட்டினார். உன் தைரியமே அழகு. வித்தியாசமா இருக்க. இப்படியே இரு.",
  //       "என்னாச்சு பாலு? நான் கத்திப் பேசுறேனாம். டீச்சர் சொல்றாங்க.  நான் வீட்டிலும் அப்படித்தான். எப்போதும் அப்படித்தான். கத்திப் பேசுவது உன் இயல்பு! வித்தியாசமாக இரு. உன் இயல்பு தான் அழகு!",
  //       "சொல்லு பாத்திமா? எனக்கு எத்துப் பல் எத்துப் பல்லும் அழகு தான். வித்தியாசமா இருக்க. சிரி பாத்திமா. ",
  //       "என்ன பிரபு? எங்க வயலில் நடவு. ஸ்கூலுக்கு நான் மட்டும் லேட்டு. பரவாயில்லை. உனக்கு விவசாயமும் தெரிஞ்சிருக்கு! நீ வித்தியாசமா இருக்க!",
  //       "என்னாச்சு கென்னடி? நான் ரொம்பக் குள்ளம் மத்தவங்க உன்னனப் போல இல்லை. நீ வித்தியாசமா இருக்க? குதி! விளையாடு! ",
  //       "என்னாச்சு முத்து? யாராச்சும் அழுதால்  எனக்கும் அழுகை வருது. அட... வித்தியாசமா இருக்கே! இப்ப சிரி.",
  //       "சொல்லு அப்துல்! என் முகத்தில் மட்டும் வெள்ளை இது குறை இல்லை அப்துல். நீ வித்தியாசமா இருக்க. இதுவும் அழகுதான்!",
  //       "நான் மட்டும் இப்படி இருக்ககேன். உனக்கு சக்கரம் இருக்கு! நாங்களும் இருக்கோம். சந்தோசமாய் இரு. வித்தியாசமாய் இரு. அதுவே அழகு! "
  //     ]
  //   },
  //   lang: 'ta'
  // },
  // {
  //   "id": 6,
  //   "avatar": "Azhaguthaan",
  //   "title": "ವಿತ್ಯಾಸವೇ ಸುಂದರ",
  //   "story": {
  //     "val": [
  //       "ಏ.. ರಾಮು.. ಏನಾಯ್ತು! ಹಲ್ಲು ಬಿದ್ದಿತ್ತೇ! ‘ಓಟ ಹಲ್ಲು’.. ಎಂದು ಕರೆಯುತ್ತಾರೆ. ಇದು ಮಾತ್ರ ವಿಭಿನ್ನವಾಗಿದೆ. ಓಟ ಹಲ್ಲು ಸಹ ಸುಂದರವೇ. ನಗುತಾರೆ!",
  //       "ಏನು ರಾಣಿ? ನಾನು ಕನ್ನಡಿ ಧರಿಸಿದ್ದೇನೆ. ತರಗತಿಯಲ್ಲಿ ನೋಡು. ಯಾರು ಧರಿಸಿಲ್ಲ. ನೀನೇ ಮಾತ್ರ. ವಿಭಿನ್ನವಾಗಿದೆ. ಇದೂ ಸುಂದರವೇ!",
  //       "ಹೇಳು ಕಣ್ಮಣಿ! ನನಗೆ ಸಿಹಿಯೇ ಇಷ್ಟವಿಲ್ಲ. ಕಹಿ ಮಾತ್ರ ಇಷ್ಟ. ಪಾವಕಾಯ ಹುಳಿಯನೆ ಇಡಿದರೆ... ತುಂಬಾ ಅನ್ನ ತಿನ್ನುತ್ತೇನೆ. ಅಯ್ಯೋ... ಇಷ್ಟವಾದುದನ್ನು ಮಾತನಾಡುವುದು! ವಿಭಿನ್ನವಾಗಿದೆ. ಹೀಗೆ ಇರಿ!",
  //       "ಏನು ತಾಯಿ? ಸಂತೋಷದಿಂದ ಇದ್ದರೆ ‘ಡಾನ್ಸ್’ ಮಾಡುತ್ತೇನೆ. ನಿನ್ನೆ ಬೀದಿಯಲ್ಲಿ ಡಾನ್ಸ್ ಮಾಡಿದ್ದೆ. ಅಯ್ಯೋ... ನೀನು ಸ್ಪಷ್ಟತೆಯಿಂದ ಇದ್ದೀಯ! ವಿಭಿನ್ನವಾಗಿದೆ. ಚೆನ್ನಾಗಿ ಮಾಡು.",
  //       "ಏನು ಮಸನಿ? ನನ್ನ ಹೆಸರನ್ನು ಹೇಳಿ ನಕ್ಕಿದ್ದಾರೆ! ನಿನ್ನ ಹೆಸರು ಇಲ್ಲಿಗೆ ಹೊಸದು. ವಿಭಿನ್ನವಾಗಿದೆ. ಅದೇನೋ ಸುಂದರ. ಖುಷಿಪಡು ಮಸನಿ.",
  //       "ಏನಾಯ್ತು ಲತಾ? ಓಟ ಸ್ಪರ್ಧೆ. ನಾನು ಕಡೆಯವನು. ಕೊನೆಯವನಾಗುವುದು ಸಹ ಸುಂದರವೇ. ವಿಭಿನ್ನವಾಗಿರು.",
  //       "ಪಾಂಡಿಗೆ ಏನು? “ಎಡ ಕೈಯಲ್ಲಿ ಮಾತ್ರ ತಿನ್ನುತ್ತೇನೆ. ಎಡ ಕೈಯಲ್ಲಿ ಬರೆಯುತ್ತೇನೆ. ಎಲ್ಲವನ್ನೂ ಎಡ ಕೈಯಲ್ಲಿ ಮಾಡುತ್ತೇನೆ” ಅದಕ್ಕೆ ಏನು? ಎಡ ಕೈಯಲ್ಲಿ ಚೆನ್ನಾಗಿ ಬರೆಯುತ್ತೀಯ. ತರಗತಿಯಲ್ಲಿ ನೋಡು. ನಿನ್ನಂತೆ ಯಾರು ಇಲ್ಲ. ನೀನು ವಿಭಿನ್ನವಾಗಿದೆ. ಇದೂ ಸುಂದರವೇ.",
  //       "ಹೇಳು ವಾಣಿ! ನಾನು ದಪ್ಪಗಿದ್ದೇನೆ. ಅದಕ್ಕೆ ಏನು? ದೇಹವನ್ನು ಕಡಿಮೆ ಮಾಡಬೇಕು. ಈಗ ನೀನು ವಿಭಿನ್ನವಾಗಿದ್ದೀಯ. ಇದೂ ಸುಂದರವೇ!",
  //       "ಏನಾಯ್ತು ಕುಮಾರಿ? ನನಗೆ ಇಷ್ಟವಾಗಲಿಲ್ಲ. 'ಇಲ್ಲ' ಎಂದೆ. ತಂದೆ ತಿದ್ದಿದರು. ನಿನ್ನ ಧೈರ್ಯವೇ ಸುಂದರ. ವಿಭಿನ್ನವಾಗಿರು. ಹೀಗೆ ಇರಿ.",
  //       "ಏನಾಯ್ತು ಬಾಲು? ನಾನು ಕೂಗುತ್ತಾ ಮಾತನಾಡುತ್ತೇನೆ ಎಂದಾರೆ. ಶಿಕ್ಷಕರು ಹೇಳುತ್ತಾರೆ. ನಾನು ಮನೆಯಲ್ಲಿ ಸಹ ಹಾಗೆ. ಯಾವಾಗಲೂ ಹಾಗೆ. ಕೂಗುತ್ತಾ ಮಾತನಾಡುವುದು ನಿನ್ನ ಸ್ವಭಾವ! ವಿಭಿನ್ನವಾಗಿರು. ನಿನ್ನ ಸ್ವಭಾವವೇ ಸುಂದರ!",
  //       "ಹೇಳು ಪಾತಿಮಾ? ನನಗೆ ಎಷ್ಟು ಹಲ್ಲು ಇದ್ದರೂ ಸುಂದರವೇ. ವಿಭಿನ್ನವಾಗಿರು. ನಗು ಪಾತಿಮಾ.",
  //       "ಏನು ಪ್ರಭು? ನಮ್ಮ ಹೊಲದಲ್ಲಿ ನೆಡುವುದು. ಶಾಲೆಗೆ ನಾನು ಮಾತ್ರ ತಡವಾಗಿ ಬರುವೆ. ಪರವಾಗಿಲ್ಲ. ನಿನಗೆ ಕೃಷಿಯೂ ಗೊತ್ತಾಗಿದೆ! ನೀನು ವಿಭಿನ್ನವಾಗಿದ್ದೀಯ!",
  //       "ಏನಾಯ್ತು ಕೆನ್ನಡಿ? ನಾನು ತುಂಬಾ ಚಿಕ್ಕವನು. ಇತರರು ನಿನ್ನಂತೆ ಇರಲ್ಲ. ನೀನು ವಿಭಿನ್ನವಾಗಿದ್ದೀಯ? ಕುಡಿ! ಆಡಾಡು!",
  //       "ಏನಾಯ್ತು ಮುತ್ತು? ಯಾರಾದರೂ ಅಳಿದರೆ ನನಗೂ ಅಳು ಬರುತ್ತದೆ. ಅಯ್ಯೋ... ವಿಭಿನ್ನವಾಗಿದೆ! ಈಗ ನಗು.",
  //       "ಹೇಳು ಅಬ್ದುಲ್! ನನ್ನ ಮುಖದಲ್ಲಿ ಮಾತ್ರ ಬಿಳಿ. ಇದು ಹೀನಾಯವಲ್ಲ ಅಬ್ದುಲ್. ನೀನು ವಿಭಿನ್ನವಾಗಿದ್ದೀಯ. ಇದೂ ಸುಂದರವೇ!",
  //       "ನಾನು ಮಾತ್ರ ಹೀಗೆ ಇರುತ್ತೇನೆ. ನಿನಗೆ ಚಕ್ರ ಇದೆ! ನಾವೂ ಇದ್ದೇವೆ. ಖುಷಿಯಾಗಿ ಇರಿ. ವಿಭಿನ್ನವಾಗಿರು. ಅದೇ ಸುಂದರ!"
  //     ]
  //   },
  //   "lang": "kn"
  // },
  // {
  //   id: 8,
  //   avatar: "found",
  //   title: "LOST AND FOUND",
  //   story:
  //     "Sophie was a little girl who loved to explore. She lived in a small town with her parents, and she would often wander off into the woods behind their house, looking for adventure.",
  // },
  // {
  //   id: 9,
  //   title: "SINGING IN THE RAIN",
  //   avatar: "singing",
  //   story:
  //     "Satya was a young boy who loved to explore the forest near his village. He often went out alone, taking in the sights and sounds of the natural world around him.",
  // },
  // {
  //   id: 10,
  //   avatar: "helping",
  //   title: "A HELPING HAND",
  //   story:
  //     "Sophie was walking home from school when she noticed an elderly woman struggling with her groceries. The woman was walking with a cane and had several heavy bags in her arms.",
  // },
];

function Home() {
  function storySelect(item) {
    localStorage.setItem("story", JSON.stringify(item.story));
    localStorage.setItem("index", item.id);
  }

  const handleLanguage = (lang) => {
    localStorage.setItem('apphomelang', lang);
  }

  return (
    <div className="main-container">
      <div className="top-header">
        <h1 className="min-test">
          STORYLINGO
        </h1>
        <Link to='/'>
          <img
            src={homeicon}
            height="25px"
            alt="homeicon"
            style={{ cursor: "pointer" }}
          />
        </Link>
      </div>
      <div>
        {/* <img
          src={story}
          height="70px"
          alt="story"
          style={window.screen.width>767?{ marginTop: "20px" }:{marginTop:'60px'}}
        /> */}
        <h1 className="min-selectstory">
          SELECT STORY
        </h1>
      </div>
      <div className="grid">

        {Data.map((item, index) => {
          console.log(item);

          return (
            <Link
              to="/player"
              style={
                index < 6
                  ? { textDecoration: "none" }
                  : {
                    textDecoration: "none",
                    opacity: 0.3,
                    pointerEvents: "none",
                  }
              }
              key={item.id}
            >
              <div
                key={item.id}
                className="grid-item"
                onClick={() => {
                  interactCall("storySelect", "home", "DT", "");
                  storySelect(item);
                  handleLanguage(item.lang)
                }}
              >
                <div>
                  <img
                    height="150px"
                    width="auto"
                    style={{ borderRadius: "24px 24px 0 0" }}
                    src={require(`../assets/${item.avatar}.png`)}
                    alt={item.avatar}
                  />
                </div>
                <div className="title">{item.title}</div>
              </div>
            </Link>
          );
        })}
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default Home;