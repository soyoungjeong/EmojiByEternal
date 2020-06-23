/* eslint-disable import/extensions */
import Util from '../service/util.mjs';
import getEmoji from '../emoji/getEmoji.js';
import setSetting from '../settings/setSetting.js';
import handleSetting from '../settings/handelSetting.js';
import firstSet from '../settings/firstSetting.js';

function afterRendering() {
  // emoji 불러오기
  getEmoji();
  Util.includeJS('../js/panel.js');
  Util.includeJS('../js/search.js');

  handleSetting(); // event listener 등록
  firstSet(); // 초기 storage 설정
  setSetting(); // setting 버튼 설정
}

afterRendering();
