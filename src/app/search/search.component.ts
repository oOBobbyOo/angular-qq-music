import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.less']
})
export class SearchComponent implements OnInit {
  public isShowDelete = false;
  public isShowCancel = false;
  public isShowRecord = false;
  public isShowSearch = false;
  public isShowNull = false;
  public searchName = '';
  public searchData = [];
  public data = [
    {
      songmid: '000Pw70r33gxY9',
      songname: '有可能的夜晚 (Live)',
      songurl: 'http://y.qq.com/#type=song&id=104275746',
      songpic: 'https://y.gtimg.cn/music/photo_new/T002R68x68M000002mSxwp3nrB3r.jpg?max_age=2592000',
      singer: [
        {
          id: 19633,
          mid: '001Z043U01BqsW',
          name: '曾轶可',
          name_hilight: '曾轶可'
        }
      ]
    },
    {
      songmid: '000Pw70r33gxY9',
      songname: '有可能的夜晚 (Live)',
      songurl: 'http://y.qq.com/#type=song&id=104275746',
      songpic: 'https://y.gtimg.cn/music/photo_new/T002R68x68M000002mSxwp3nrB3r.jpg?max_age=2592000',
      singer: [
        {
          id: 19633,
          mid: '001Z043U01BqsW',
          name: '曾轶可',
          name_hilight: '曾轶可'
        }
      ]
    },
    {
      songmid: '000Pw70r33gxY9',
      songname: '有可能的夜晚 (Live)',
      songurl: 'http://y.qq.com/#type=song&id=104275746',
      songpic: 'https://y.gtimg.cn/music/photo_new/T002R68x68M000002mSxwp3nrB3r.jpg?max_age=2592000',
      singer: [
        {
          id: 19633,
          mid: '001Z043U01BqsW',
          name: '曾轶可',
          name_hilight: '曾轶可'
        }
      ]
    }
  ];

  public hotTags = ['MOVE YOUR BODY', 'NEVER BE ALONE', '爱情有时很残忍', '不能说的秘密', 'IZONE'];
  public recordList = ['爱情有时很残忍', '爱情有时很残忍', '爱情有时很残忍'];

  constructor() {}

  ngOnInit() {}

  // 获取焦点
  onFocus(event) {
    this.isShowCancel = true;
    if (!this.isShowSearch) {
      if (this.recordList.length > 0) {
        this.isShowRecord = true;
      } else {
        this.isShowRecord = false;
      }
    }
  }

  // 按键抬起
  onKeyUp(event) {
    console.log('keyup');
    if (this.searchName === '') {
      this.isShowDelete = false;
      this.isShowSearch = false;
    } else {
      this.isShowDelete = true;
    }
  }

  // 提交
  onEnter(event) {
    console.log(this.searchName);
    if (this.searchName !== '') {
      this.recordList.push(this.searchName);
      // this.isShowSearch = true;
      this.searchData = this.data;
      console.log(this.searchData);
    } else {
      this.searchData = [];
    }
    this.isShowRecord = false;
  }

  // 删除
  onDelete() {
    this.searchName = '';
    this.isShowDelete = false;
    this.isShowSearch = false;
    this.isShowRecord = true;
  }

  // 取消
  onCancel() {
    this.searchName = '';
    this.isShowDelete = false;
    this.isShowCancel = false;
    this.isShowRecord = false;
    this.isShowSearch = false;
  }

  // 删除单个记录
  deleteRecord(index) {
    this.recordList = this.recordList.filter((item, idx) => idx !== index);
    if (this.recordList.length <= 0) {
      this.isShowRecord = false;
    }
  }

  // 清除所有搜索记录
  clearAllRecord() {
    this.recordList = [];
    this.isShowRecord = false;
  }
}
