class Form {
    constructor() {
     this.input=createInput("").attribute("placeholder","ENTER YOUR Name")
     this.button=createImg("images/start.png")
    // this.titleImg=createImg("images/bg.png")
    }
    Element() {
        this.button.position(width/2-90,height/2-20);
        this.input.position(width/2-110,height/2-80);
       // this.titleImg.position(120,50);
    }

    replaceImg() {
        this.button.mousePressed(()=>{
           gamestate === "play";
            this.button.hide();
            this.input.hide();
        })
    }

    display(){
      this.Element();
      this.replaceImg();
    }
}