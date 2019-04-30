import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.less']
})
export class TopicComponent implements OnInit {
  public topList = [
    {
      id: 4,
      listenCount: 19400000,
      picUrl: 'http://y.gtimg.cn/music/photo_new/T003R300x300M000002Lm6KN4YRAdL.jpg',
      songList: [
        {
          singername: '吴亦凡',
          songname: '大碗宽面'
        },
        {
          singername: '梁博',
          songname: '出现又离开 (Live)'
        },
        {
          singername: 'Ice paper',
          songname: '心如止水'
        }
      ],
      topTitle: '巅峰榜·流行指数',
      type: 0
    },
    {
      id: 4,
      listenCount: 19400000,
      picUrl: 'http://y.gtimg.cn/music/photo_new/T003R300x300M000002Lm6KN4YRAdL.jpg',
      songList: [
        {
          singername: '吴亦凡',
          songname: '大碗宽面'
        },
        {
          singername: '梁博',
          songname: '出现又离开 (Live)'
        },
        {
          singername: 'Ice paper',
          songname: '心如止水'
        }
      ],
      topTitle: '巅峰榜·流行指数',
      type: 0
    }
  ];

  constructor() {}

  ngOnInit() {}
}
