const number: number = 11;
const string: string = "string";
const bool: boolean = true;

let value: any = 11;
value = "ioqwjdiowqdwq";
value = true;

const numArr: number[] = [1, 2, 3];
const stringArr: string[] = ["a", "b", "c"];

const nestedNumArr: number[][] = [
  [1, 2, 3],
  [1, 2, 3],
];

type threeNumArr = [number, number, number];

const numArr2: threeNumArr = [1, 2, 3];
const numArr3: threeNumArr = [1, 2, 3];
const numArr4: threeNumArr = [1, 2, 3];
const numArr5: threeNumArr = [1, 2, 3];

const mixArr: [number, string, boolean] = [1, "string", true];

interface todoType {
  id: number;
  task: string;
  completed: boolean;
  unnecessary?: string;
  displayID?(): string;
}

// type todoType = {
//   id: number | string;
//   task: string;
//   completed: boolean;
// };

const todoObj: todoType = {
  id: 1,
  task: "cook",
  completed: false,
  unnecessary: "unnecessary",
  displayID(){
    console.log(typeof this.id)
    return this.id
  }
};

todoObj.displayID();

let todoObj2: todoType = {
  id: 2,
  task: "work",
  completed: false,
};

todoObj2 = {
  id: 2,
  task: "work hard",
  completed: true,
};

let ID1: number | string = 1;
ID1 = "1";



function sum(a:number,b:number):number{
  return a + b;
}

const sumArrow = (a:number,b:number):number=>{
  return a+b;
}


// "light-theme" or "dark-theme"
type themeType = "light-theme" | "dark-theme";
const className:themeType = "dark-theme";
type fontType = "sm" | "md" | "bg";
const font: fontType = "bg";


interface Animal {
  name: string;
  weight?: number;
  food?: string | Animal 
}

interface Bear extends Animal {
  honey: boolean
}

interface Fish extends Animal {
  swim: boolean
}

const fish:Animal = {
  name: "fish1"
}

const bear: Bear = {
  name: "brown bear",
  honey: true
}


// function toNumArray(a:number,b:number):number[]{
//   return [a,b]
// }

// function toStringArr(a:string,b:string):string[] {
//   return [a,b]
// }


function toArr<T>(a:T,b:T):T[]{
  return [a,b]
}

// console.log(toArr<number>(1,2))
// console.log(toArr<string>("1","2"))


class Job<T> {
  name:string;
  pay: number;
  idk: T;
  constructor(name:string,pay:number,idk:T){
    this.name = name;
    this.pay = pay;
    this.idk = idk;
  }
}

const web_developer = new Job<string>("react developer",200000,"q9128uqw");
// console.log(web_developer)



// function useCount(count:number=0):number{
//   return count;
// }

// console.log(useCount(5))


//how to handle undefined property in an API response
interface postType {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const data = [
  {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
    "userId": 1,
    "id": 2,
    "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    },
    {
    "userId": 1,
    "id": 3,
    "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
    },
]

function showPost(post:postType):string{
  return post.title;
}

data.forEach(post=>{
  // showPost(post)
})



function getCallback(sumFn:(a:number,b:number)=>number){
  const res = sumFn(1,2);
  if(typeof res==="string") throw new Error("no string allowed")
  console.log(res);
}


getCallback((a,b)=>{
  return a+b
})