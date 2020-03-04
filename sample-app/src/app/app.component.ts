import { Component } from '@angular/core';

const myData = {
  id : "test",
  metadata: {},
  data : {
    areas : [
      {
        type : "column",
        section: [{
          title : "section 1",
          rjf : [{
            type : "Heading",
            depth : 0,
            text : "Hello , welcome to angular",
            inlineStyleRange : []
          }]
        },
        {
          title : "Section 2",
          rjf : [{
            type : "Paragraph",
            depth : 0,
            text : "learn angular",
            inlineStyleRange : []
          }]
        },
        {
          title : "section 3",
          rjf : [{
            type : "Heading",
            depth : 0,
            text : "learn graphQL",
            inlineStyleRange : []
          },
          {
            type : "Paragraph",
            depth : 0,
            text : "learn js",
            inlineStyleRange : []
          },
          {
            type : "Paragraph",
            depth : 0,
            text : `Do you have questions or comments and do you wish to contact me?
                    Please Visit our customer support page.`,
            inlineStyleRange : {
              type : "link",
              length : 16,
              data : {
                target : "_self",
                url : "https://google.com"
              }
            }
          }]
        }]
      }
    ]
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'today-proj';
  public datasource = [];

  ngOnInit(){
    console.log(myData);
    this.datasource = myData.data.areas;
  }
}