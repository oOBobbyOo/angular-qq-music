import { Component, OnInit, Input } from '@angular/core';

interface Recommend {
  imgUrl: string;
  title: string;
  subTitle: string;
}

@Component({
  selector: 'app-recommend',
  templateUrl: './recommend.component.html',
  styleUrls: ['./recommend.component.less']
})
export class RecommendComponent implements OnInit {
  @Input() recommend: Recommend = {
    imgUrl: '',
    title: '',
    subTitle: ''
  };

  constructor() {}

  ngOnInit() {}
}
