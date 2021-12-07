<template>
    <div class="TwZipSelectCore__wrapper">
        <select
            class="TwZipSelectCore__select"
            v-model="selectedCounty"
            @change="resetCounty"
        >
            <option :value="{name:'', param:''}" disabled>請選擇縣市</option>
            <option v-for="county in counties" :key="county.param" :value="county">
                {{county.name}}
            </option>
        </select>

        <select
            class="TwZipSelectCore__select"
            v-model="selectedZone"
            @change="getSelectedZone"
        >
            <option :value="{name: '', zipCode: '', county: '', countyName: ''}" disabled>請選擇鄉鎮市區</option>
            <option
                v-for="zone in zones"
                :key="zone.name"
                :value="zone"
            >
                {{zone.name}}
            </option>
        </select>
    </div>
</template>

<script>
import {
    defineComponent, ref, computed
} from 'vue'

export default defineComponent({
    name: 'Demo',
    emits: ['getSelectedZone'],
    setup (props, { emit }) {
        const countyList = [
            {
                name: '台北市',
                param: 'A'
            },
            {
                name: '基隆市',
                param: 'C'
            },
            {
                name: '新北市',
                param: 'F'
            },
            {
                name: '宜蘭縣',
                param: 'G'
            },
            {
                name: '新竹市',
                param: 'O'
            },
            {
                name: '新竹縣',
                param: 'J'
            },
            {
                name: '桃園市',
                param: 'H'
            },
            {
                name: '苗栗縣',
                param: 'K'
            },
            {
                name: '台中市',
                param: 'B'
            },
            {
                name: '彰化縣',
                param: 'N'
            },
            {
                name: '南投縣',
                param: 'M'
            },
            {
                name: '嘉義市',
                param: 'I'
            },
            {
                name: '嘉義縣',
                param: 'Q'
            },
            {
                name: '雲林縣',
                param: 'P'
            },
            {
                name: '台南市',
                param: 'D'
            },
            {
                name: '高雄市',
                param: 'E'
            },
            {
                name: '澎湖縣',
                param: 'X'
            },
            {
                name: '屏東縣',
                param: 'T'
            },
            {
                name: '台東縣',
                param: 'V'
            },
            {
                name: '花蓮縣',
                param: 'U'
            },
            {
                name: '金門縣',
                param: 'W'
            },
            {
                name: '連江縣',
                param: 'Z'
            }
        ]
        const zoneList = [
            {
                name: '中正區',
                zipCode: '100',
                county: 'A'
            },
            {
                name: '大同區',
                zipCode: '103',
                county: 'A'
            },
            {
                name: '中山區',
                zipCode: '104',
                county: 'A'
            },
            {
                name: '松山區',
                zipCode: '105',
                county: 'A'
            },
            {
                name: '大安區',
                zipCode: '106',
                county: 'A'
            },
            {
                name: '萬華區',
                zipCode: '108',
                county: 'A'
            },
            {
                name: '信義區',
                zipCode: '110',
                county: 'A'
            },
            {
                name: '士林區',
                zipCode: '111',
                county: 'A'
            },
            {
                name: '北投區',
                zipCode: '112',
                county: 'A'
            },
            {
                name: '內湖區',
                zipCode: '114',
                county: 'A'
            },
            {
                name: '南港區',
                zipCode: '115',
                county: 'A'
            },
            {
                name: '文山區',
                zipCode: '116',
                county: 'A'
            },
            {
                name: '仁愛區',
                zipCode: '200',
                county: 'C'
            },
            {
                name: '信義區',
                zipCode: '201',
                county: 'C'
            },
            {
                name: '中正區',
                zipCode: '202',
                county: 'C'
            },
            {
                name: '中山區',
                zipCode: '203',
                county: 'C'
            },
            {
                name: '安樂區',
                zipCode: '204',
                county: 'C'
            },
            {
                name: '暖暖區',
                zipCode: '205',
                county: 'C'
            },
            {
                name: '七堵區',
                zipCode: '206',
                county: 'C'
            },
            {
                name: '萬里區',
                zipCode: '207',
                county: 'F'
            },
            {
                name: '金山區',
                zipCode: '208',
                county: 'F'
            },
            {
                name: '板橋區',
                zipCode: '220',
                county: 'F'
            },
            {
                name: '汐止區',
                zipCode: '221',
                county: 'F'
            },
            {
                name: '深坑區',
                zipCode: '222',
                county: 'F'
            },
            {
                name: '石碇區',
                zipCode: '223',
                county: 'F'
            },
            {
                name: '瑞芳區',
                zipCode: '224',
                county: 'F'
            },
            {
                name: '平溪區',
                zipCode: '226',
                county: 'F'
            },
            {
                name: '雙溪區',
                zipCode: '227',
                county: 'F'
            },
            {
                name: '貢寮區',
                zipCode: '228',
                county: 'F'
            },
            {
                name: '新店區',
                zipCode: '231',
                county: 'F'
            },
            {
                name: '坪林區',
                zipCode: '232',
                county: 'F'
            },
            {
                name: '烏來區',
                zipCode: '233',
                county: 'F'
            },
            {
                name: '永和區',
                zipCode: '234',
                county: 'F'
            },
            {
                name: '中和區',
                zipCode: '235',
                county: 'F'
            },
            {
                name: '土城區',
                zipCode: '236',
                county: 'F'
            },
            {
                name: '三峽區',
                zipCode: '237',
                county: 'F'
            },
            {
                name: '樹林區',
                zipCode: '238',
                county: 'F'
            },
            {
                name: '鶯歌區',
                zipCode: '239',
                county: 'F'
            },
            {
                name: '三重區',
                zipCode: '241',
                county: 'F'
            },
            {
                name: '新莊區',
                zipCode: '242',
                county: 'F'
            },
            {
                name: '泰山區',
                zipCode: '243',
                county: 'F'
            },
            {
                name: '林口區',
                zipCode: '244',
                county: 'F'
            },
            {
                name: '蘆洲區',
                zipCode: '247',
                county: 'F'
            },
            {
                name: '五股區',
                zipCode: '248',
                county: 'F'
            },
            {
                name: '八里區',
                zipCode: '249',
                county: 'F'
            },
            {
                name: '淡水區',
                zipCode: '251',
                county: 'F'
            },
            {
                name: '三芝區',
                zipCode: '252',
                county: 'F'
            },
            {
                name: '石門區',
                zipCode: '253',
                county: 'F'
            },
            {
                name: '宜蘭市',
                zipCode: '260',
                county: 'G'
            },
            {
                name: '頭城鎮',
                zipCode: '261',
                county: 'G'
            },
            {
                name: '礁溪鄉',
                zipCode: '262',
                county: 'G'
            },
            {
                name: '壯圍鄉',
                zipCode: '263',
                county: 'G'
            },
            {
                name: '員山鄉',
                zipCode: '264',
                county: 'G'
            },
            {
                name: '羅東鎮',
                zipCode: '265',
                county: 'G'
            },
            {
                name: '三星鄉',
                zipCode: '266',
                county: 'G'
            },
            {
                name: '大同鄉',
                zipCode: '267',
                county: 'G'
            },
            {
                name: '五結鄉',
                zipCode: '268',
                county: 'G'
            },
            {
                name: '冬山鄉',
                zipCode: '269',
                county: 'G'
            },
            {
                name: '蘇澳鎮',
                zipCode: '270',
                county: 'G'
            },
            {
                name: '南澳鄉',
                zipCode: '272',
                county: 'G'
            },
            {
                name: '釣魚臺列嶼',
                zipCode: '290',
                county: 'G'
            },
            {
                name: '北區',
                zipCode: '300',
                county: 'O'
            },
            {
                name: '東區',
                zipCode: '300',
                county: 'O'
            },
            {
                name: '香山區',
                zipCode: '300',
                county: 'O'
            },
            {
                name: '竹北市',
                zipCode: '302',
                county: 'J'
            },
            {
                name: '湖口鄉',
                zipCode: '303',
                county: 'J'
            },
            {
                name: '新豐鄉',
                zipCode: '304',
                county: 'J'
            },
            {
                name: '新埔鎮',
                zipCode: '305',
                county: 'J'
            },
            {
                name: '關西鎮',
                zipCode: '306',
                county: 'J'
            },
            {
                name: '芎林鄉',
                zipCode: '307',
                county: 'J'
            },
            {
                name: '寶山鄉',
                zipCode: '308',
                county: 'J'
            },
            {
                name: '竹東鎮',
                zipCode: '310',
                county: 'J'
            },
            {
                name: '五峰鄉',
                zipCode: '311',
                county: 'J'
            },
            {
                name: '橫山鄉',
                zipCode: '312',
                county: 'J'
            },
            {
                name: '尖石鄉',
                zipCode: '313',
                county: 'J'
            },
            {
                name: '北埔鄉',
                zipCode: '314',
                county: 'J'
            },
            {
                name: '峨眉鄉',
                zipCode: '315',
                county: 'J'
            },
            {
                name: '中壢區',
                zipCode: '320',
                county: 'H'
            },
            {
                name: '平鎮區',
                zipCode: '324',
                county: 'H'
            },
            {
                name: '龍潭區',
                zipCode: '325',
                county: 'H'
            },
            {
                name: '楊梅區',
                zipCode: '326',
                county: 'H'
            },
            {
                name: '新屋區',
                zipCode: '327',
                county: 'H'
            },
            {
                name: '觀音區',
                zipCode: '328',
                county: 'H'
            },
            {
                name: '桃園區',
                zipCode: '330',
                county: 'H'
            },
            {
                name: '龜山區',
                zipCode: '333',
                county: 'H'
            },
            {
                name: '八德區',
                zipCode: '334',
                county: 'H'
            },
            {
                name: '大溪區',
                zipCode: '335',
                county: 'H'
            },
            {
                name: '復興區',
                zipCode: '336',
                county: 'H'
            },
            {
                name: '大園區',
                zipCode: '337',
                county: 'H'
            },
            {
                name: '蘆竹區',
                zipCode: '338',
                county: 'H'
            },
            {
                name: '竹南鎮',
                zipCode: '350',
                county: 'K'
            },
            {
                name: '頭份市',
                zipCode: '351',
                county: 'K'
            },
            {
                name: '三灣鄉',
                zipCode: '352',
                county: 'K'
            },
            {
                name: '南庄鄉',
                zipCode: '353',
                county: 'K'
            },
            {
                name: '獅潭鄉',
                zipCode: '354',
                county: 'K'
            },
            {
                name: '後龍鎮',
                zipCode: '356',
                county: 'K'
            },
            {
                name: '通霄鎮',
                zipCode: '357',
                county: 'K'
            },
            {
                name: '苑裡鎮',
                zipCode: '358',
                county: 'K'
            },
            {
                name: '苗栗市',
                zipCode: '360',
                county: 'K'
            },
            {
                name: '造橋鄉',
                zipCode: '361',
                county: 'K'
            },
            {
                name: '頭屋鄉',
                zipCode: '362',
                county: 'K'
            },
            {
                name: '公館鄉',
                zipCode: '363',
                county: 'K'
            },
            {
                name: '大湖鄉',
                zipCode: '364',
                county: 'K'
            },
            {
                name: '泰安鄉',
                zipCode: '365',
                county: 'K'
            },
            {
                name: '銅鑼鄉',
                zipCode: '366',
                county: 'K'
            },
            {
                name: '三義鄉',
                zipCode: '367',
                county: 'K'
            },
            {
                name: '西湖鄉',
                zipCode: '368',
                county: 'K'
            },
            {
                name: '卓蘭鎮',
                zipCode: '369',
                county: 'K'
            },
            {
                name: '中區',
                zipCode: '400',
                county: 'B'
            },
            {
                name: '東區',
                zipCode: '401',
                county: 'B'
            },
            {
                name: '南區',
                zipCode: '402',
                county: 'B'
            },
            {
                name: '西區',
                zipCode: '403',
                county: 'B'
            },
            {
                name: '北區',
                zipCode: '404',
                county: 'B'
            },
            {
                name: '北屯區',
                zipCode: '406',
                county: 'B'
            },
            {
                name: '西屯區',
                zipCode: '407',
                county: 'B'
            },
            {
                name: '南屯區',
                zipCode: '408',
                county: 'B'
            },
            {
                name: '太平區',
                zipCode: '411',
                county: 'B'
            },
            {
                name: '大里區',
                zipCode: '412',
                county: 'B'
            },
            {
                name: '霧峰區',
                zipCode: '413',
                county: 'B'
            },
            {
                name: '鳥日區',
                zipCode: '414',
                county: 'B'
            },
            {
                name: '豐原區',
                zipCode: '420',
                county: 'B'
            },
            {
                name: '后里區',
                zipCode: '421',
                county: 'B'
            },
            {
                name: '石岡區',
                zipCode: '422',
                county: 'B'
            },
            {
                name: '東勢區',
                zipCode: '423',
                county: 'B'
            },
            {
                name: '和平區',
                zipCode: '424',
                county: 'B'
            },
            {
                name: '新社區',
                zipCode: '426',
                county: 'B'
            },
            {
                name: '潭子區',
                zipCode: '427',
                county: 'B'
            },
            {
                name: '大雅區',
                zipCode: '428',
                county: 'B'
            },
            {
                name: '神岡區',
                zipCode: '429',
                county: 'B'
            },
            {
                name: '大肚區',
                zipCode: '432',
                county: 'B'
            },
            {
                name: '沙鹿區',
                zipCode: '433',
                county: 'B'
            },
            {
                name: '龍井區',
                zipCode: '434',
                county: 'B'
            },
            {
                name: '梧棲區',
                zipCode: '435',
                county: 'B'
            },
            {
                name: '清水區',
                zipCode: '436',
                county: 'B'
            },
            {
                name: '大甲區',
                zipCode: '437',
                county: 'B'
            },
            {
                name: '外埔區',
                zipCode: '438',
                county: 'B'
            },
            {
                name: '大安區',
                zipCode: '439',
                county: 'B'
            },
            {
                name: '彰化市',
                zipCode: '500',
                county: 'N'
            },
            {
                name: '芬園鄉',
                zipCode: '502',
                county: 'N'
            },
            {
                name: '花壇鄉',
                zipCode: '503',
                county: 'N'
            },
            {
                name: '秀水鄉',
                zipCode: '504',
                county: 'N'
            },
            {
                name: '鹿港鎮',
                zipCode: '505',
                county: 'N'
            },
            {
                name: '福興鄉',
                zipCode: '506',
                county: 'N'
            },
            {
                name: '線西鄉',
                zipCode: '507',
                county: 'N'
            },
            {
                name: '和美鎮',
                zipCode: '508',
                county: 'N'
            },
            {
                name: '伸港鄉',
                zipCode: '509',
                county: 'N'
            },
            {
                name: '員林市',
                zipCode: '510',
                county: 'N'
            },
            {
                name: '社頭鄉',
                zipCode: '511',
                county: 'N'
            },
            {
                name: '永靖鄉',
                zipCode: '512',
                county: 'N'
            },
            {
                name: '埔心鄉',
                zipCode: '513',
                county: 'N'
            },
            {
                name: '溪湖鎮',
                zipCode: '514',
                county: 'N'
            },
            {
                name: '大村鄉',
                zipCode: '515',
                county: 'N'
            },
            {
                name: '埔鹽鄉',
                zipCode: '516',
                county: 'N'
            },
            {
                name: '田中鎮',
                zipCode: '520',
                county: 'N'
            },
            {
                name: '北斗鎮',
                zipCode: '521',
                county: 'N'
            },
            {
                name: '田尾鄉',
                zipCode: '522',
                county: 'N'
            },
            {
                name: '埤頭鄉',
                zipCode: '523',
                county: 'N'
            },
            {
                name: '溪州鄉',
                zipCode: '524',
                county: 'N'
            },
            {
                name: '竹塘鄉',
                zipCode: '525',
                county: 'N'
            },
            {
                name: '二林鎮',
                zipCode: '526',
                county: 'N'
            },
            {
                name: '大城鄉',
                zipCode: '527',
                county: 'N'
            },
            {
                name: '芳苑鄉',
                zipCode: '528',
                county: 'N'
            },
            {
                name: '二水鄉',
                zipCode: '530',
                county: 'N'
            },
            {
                name: '南投市',
                zipCode: '540',
                county: 'M'
            },
            {
                name: '中寮鄉',
                zipCode: '541',
                county: 'M'
            },
            {
                name: '草屯鎮',
                zipCode: '542',
                county: 'M'
            },
            {
                name: '國姓鄉',
                zipCode: '544',
                county: 'M'
            },
            {
                name: '埔里鎮',
                zipCode: '545',
                county: 'M'
            },
            {
                name: '仁愛鄉',
                zipCode: '546',
                county: 'M'
            },
            {
                name: '名間鄉',
                zipCode: '551',
                county: 'M'
            },
            {
                name: '集集鎮',
                zipCode: '552',
                county: 'M'
            },
            {
                name: '水里鄉',
                zipCode: '553',
                county: 'M'
            },
            {
                name: '魚池鄉',
                zipCode: '555',
                county: 'M'
            },
            {
                name: '信義鄉',
                zipCode: '556',
                county: 'M'
            },
            {
                name: '竹山鎮',
                zipCode: '557',
                county: 'M'
            },
            {
                name: '鹿谷鄉',
                zipCode: '558',
                county: 'M'
            },
            {
                name: '嘉義市',
                zipCode: '600',
                county: 'I'
            },
            {
                name: '番路鄉',
                zipCode: '602',
                county: 'Q'
            },
            {
                name: '梅山鄉',
                zipCode: '603',
                county: 'Q'
            },
            {
                name: '竹崎鄉',
                zipCode: '604',
                county: 'Q'
            },
            {
                name: '阿里山鄉',
                zipCode: '605',
                county: 'Q'
            },
            {
                name: '中埔鄉',
                zipCode: '606',
                county: 'Q'
            },
            {
                name: '大埔鄉',
                zipCode: '607',
                county: 'Q'
            },
            {
                name: '水上鄉',
                zipCode: '608',
                county: 'Q'
            },
            {
                name: '鹿草鄉',
                zipCode: '611',
                county: 'Q'
            },
            {
                name: '太保市',
                zipCode: '612',
                county: 'Q'
            },
            {
                name: '朴子市',
                zipCode: '613',
                county: 'Q'
            },
            {
                name: '東石鄉',
                zipCode: '614',
                county: 'Q'
            },
            {
                name: '六腳鄉',
                zipCode: '615',
                county: 'Q'
            },
            {
                name: '新港鄉',
                zipCode: '616',
                county: 'Q'
            },
            {
                name: '民雄鄉',
                zipCode: '621',
                county: 'Q'
            },
            {
                name: '大林鎮',
                zipCode: '622',
                county: 'Q'
            },
            {
                name: '溪口鄉',
                zipCode: '623',
                county: 'Q'
            },
            {
                name: '義竹鄉',
                zipCode: '624',
                county: 'Q'
            },
            {
                name: '布袋鎮',
                zipCode: '625',
                county: 'Q'
            },
            {
                name: '斗南鎮',
                zipCode: '630',
                county: 'P'
            },
            {
                name: '大埤鄉',
                zipCode: '631',
                county: 'P'
            },
            {
                name: '虎尾鎮',
                zipCode: '632',
                county: 'P'
            },
            {
                name: '土庫鎮',
                zipCode: '633',
                county: 'P'
            },
            {
                name: '褒忠鄉',
                zipCode: '634',
                county: 'P'
            },
            {
                name: '東勢鄉',
                zipCode: '635',
                county: 'P'
            },
            {
                name: '臺西鄉',
                zipCode: '636',
                county: 'P'
            },
            {
                name: '崙背鄉',
                zipCode: '637',
                county: 'P'
            },
            {
                name: '麥寮鄉',
                zipCode: '638',
                county: 'P'
            },
            {
                name: '斗六市',
                zipCode: '640',
                county: 'P'
            },
            {
                name: '林內鄉',
                zipCode: '643',
                county: 'P'
            },
            {
                name: '古坑鄉',
                zipCode: '646',
                county: 'P'
            },
            {
                name: '莿桐鄉',
                zipCode: '647',
                county: 'P'
            },
            {
                name: '西螺鎮',
                zipCode: '648',
                county: 'P'
            },
            {
                name: '二崙鄉',
                zipCode: '649',
                county: 'P'
            },
            {
                name: '北港鎮',
                zipCode: '651',
                county: 'P'
            },
            {
                name: '水林鄉',
                zipCode: '652',
                county: 'P'
            },
            {
                name: '口湖鄉',
                zipCode: '653',
                county: 'P'
            },
            {
                name: '四湖鄉',
                zipCode: '654',
                county: 'P'
            },
            {
                name: '元長鄉',
                zipCode: '655',
                county: 'P'
            },
            {
                name: '中西區',
                zipCode: '700',
                county: 'D'
            },
            {
                name: '東區',
                zipCode: '701',
                county: 'D'
            },
            {
                name: '南區',
                zipCode: '702',
                county: 'D'
            },
            {
                name: '北區',
                zipCode: '704',
                county: 'D'
            },
            {
                name: '安平區',
                zipCode: '708',
                county: 'D'
            },
            {
                name: '安南區',
                zipCode: '709',
                county: 'D'
            },
            {
                name: '永康區',
                zipCode: '710',
                county: 'D'
            },
            {
                name: '歸仁區',
                zipCode: '711',
                county: 'D'
            },
            {
                name: '新化區',
                zipCode: '712',
                county: 'D'
            },
            {
                name: '左鎮區',
                zipCode: '713',
                county: 'D'
            },
            {
                name: '玉井區',
                zipCode: '714',
                county: 'D'
            },
            {
                name: '楠西區',
                zipCode: '715',
                county: 'D'
            },
            {
                name: '南化區',
                zipCode: '716',
                county: 'D'
            },
            {
                name: '仁德區',
                zipCode: '717',
                county: 'D'
            },
            {
                name: '關廟區',
                zipCode: '718',
                county: 'D'
            },
            {
                name: '龍崎區',
                zipCode: '719',
                county: 'D'
            },
            {
                name: '官田區',
                zipCode: '720',
                county: 'D'
            },
            {
                name: '麻豆區',
                zipCode: '721',
                county: 'D'
            },
            {
                name: '佳里區',
                zipCode: '722',
                county: 'D'
            },
            {
                name: '西港區',
                zipCode: '723',
                county: 'D'
            },
            {
                name: '七股區',
                zipCode: '724',
                county: 'D'
            },
            {
                name: '將軍區',
                zipCode: '725',
                county: 'D'
            },
            {
                name: '學甲區',
                zipCode: '726',
                county: 'D'
            },
            {
                name: '北門區',
                zipCode: '727',
                county: 'D'
            },
            {
                name: '新營區',
                zipCode: '730',
                county: 'D'
            },
            {
                name: '後壁區',
                zipCode: '731',
                county: 'D'
            },
            {
                name: '白河區',
                zipCode: '732',
                county: 'D'
            },
            {
                name: '東山區',
                zipCode: '733',
                county: 'D'
            },
            {
                name: '六甲區',
                zipCode: '734',
                county: 'D'
            },
            {
                name: '下營區',
                zipCode: '735',
                county: 'D'
            },
            {
                name: '柳營區',
                zipCode: '736',
                county: 'D'
            },
            {
                name: '鹽水區',
                zipCode: '737',
                county: 'D'
            },
            {
                name: '善化區',
                zipCode: '741',
                county: 'D'
            },
            {
                name: '大內區',
                zipCode: '742',
                county: 'D'
            },
            {
                name: '山上區',
                zipCode: '743',
                county: 'D'
            },
            {
                name: '新市區',
                zipCode: '744',
                county: 'D'
            },
            {
                name: '安定區',
                zipCode: '745',
                county: 'D'
            },
            {
                name: '新興區',
                zipCode: '800',
                county: 'E'
            },
            {
                name: '前金區',
                zipCode: '801',
                county: 'E'
            },
            {
                name: '苓雅區',
                zipCode: '802',
                county: 'E'
            },
            {
                name: '鹽埕區',
                zipCode: '803',
                county: 'E'
            },
            {
                name: '鼓山區',
                zipCode: '804',
                county: 'E'
            },
            {
                name: '旗津區',
                zipCode: '805',
                county: 'E'
            },
            {
                name: '前鎮區',
                zipCode: '806',
                county: 'E'
            },
            {
                name: '三民區',
                zipCode: '807',
                county: 'E'
            },
            {
                name: '楠梓區',
                zipCode: '811',
                county: 'E'
            },
            {
                name: '小港區',
                zipCode: '812',
                county: 'E'
            },
            {
                name: '左營區',
                zipCode: '813',
                county: 'E'
            },
            {
                name: '仁武區',
                zipCode: '814',
                county: 'E'
            },
            {
                name: '大社區',
                zipCode: '815',
                county: 'E'
            },
            {
                name: '岡山區',
                zipCode: '820',
                county: 'E'
            },
            {
                name: '路竹區',
                zipCode: '821',
                county: 'E'
            },
            {
                name: '阿蓮區',
                zipCode: '822',
                county: 'E'
            },
            {
                name: '田寮區',
                zipCode: '823',
                county: 'E'
            },
            {
                name: '燕巢區',
                zipCode: '824',
                county: 'E'
            },
            {
                name: '橋頭區',
                zipCode: '825',
                county: 'E'
            },
            {
                name: '梓官區',
                zipCode: '826',
                county: 'E'
            },
            {
                name: '彌陀區',
                zipCode: '827',
                county: 'E'
            },
            {
                name: '永安區',
                zipCode: '828',
                county: 'E'
            },
            {
                name: '湖內區',
                zipCode: '829',
                county: 'E'
            },
            {
                name: '鳳山區',
                zipCode: '830',
                county: 'E'
            },
            {
                name: '大寮區',
                zipCode: '831',
                county: 'E'
            },
            {
                name: '林園區',
                zipCode: '832',
                county: 'E'
            },
            {
                name: '鳥松區',
                zipCode: '833',
                county: 'E'
            },
            {
                name: '大樹區',
                zipCode: '840',
                county: 'E'
            },
            {
                name: '旗山區',
                zipCode: '842',
                county: 'E'
            },
            {
                name: '美濃區',
                zipCode: '843',
                county: 'E'
            },
            {
                name: '六龜區',
                zipCode: '844',
                county: 'E'
            },
            {
                name: '內門區',
                zipCode: '845',
                county: 'E'
            },
            {
                name: '杉林區',
                zipCode: '846',
                county: 'E'
            },
            {
                name: '甲仙區',
                zipCode: '847',
                county: 'E'
            },
            {
                name: '桃源區',
                zipCode: '848',
                county: 'E'
            },
            {
                name: '那瑪夏區',
                zipCode: '849',
                county: 'E'
            },
            {
                name: '茂林區',
                zipCode: '851',
                county: 'E'
            },
            {
                name: '茄萣區',
                zipCode: '852',
                county: 'E'
            },
            {
                name: '東沙群島',
                zipCode: '817',
                county: 'E'
            },
            {
                name: '南沙群島',
                zipCode: '819',
                county: 'E'
            },
            {
                name: '馬公市',
                zipCode: '880',
                county: 'X'
            },
            {
                name: '西嶼鄉',
                zipCode: '881',
                county: 'X'
            },
            {
                name: '望安鄉',
                zipCode: '882',
                county: 'X'
            },
            {
                name: '七美鄉',
                zipCode: '883',
                county: 'X'
            },
            {
                name: '白沙鄉',
                zipCode: '884',
                county: 'X'
            },
            {
                name: '湖西鄉',
                zipCode: '885',
                county: 'X'
            },
            {
                name: '屏東市',
                zipCode: '900',
                county: 'T'
            },
            {
                name: '三地門鄉',
                zipCode: '901',
                county: 'T'
            },
            {
                name: '霧臺鄉',
                zipCode: '902',
                county: 'T'
            },
            {
                name: '瑪家鄉',
                zipCode: '903',
                county: 'T'
            },
            {
                name: '九如鄉',
                zipCode: '904',
                county: 'T'
            },
            {
                name: '里港鄉',
                zipCode: '905',
                county: 'T'
            },
            {
                name: '高樹鄉',
                zipCode: '906',
                county: 'T'
            },
            {
                name: '鹽埔鄉',
                zipCode: '907',
                county: 'T'
            },
            {
                name: '長治鄉',
                zipCode: '908',
                county: 'T'
            },
            {
                name: '麟洛鄉',
                zipCode: '909',
                county: 'T'
            },
            {
                name: '竹田鄉',
                zipCode: '911',
                county: 'T'
            },
            {
                name: '內埔鄉',
                zipCode: '912',
                county: 'T'
            },
            {
                name: '萬丹鄉',
                zipCode: '913',
                county: 'T'
            },
            {
                name: '潮州鎮',
                zipCode: '920',
                county: 'T'
            },
            {
                name: '泰武鄉',
                zipCode: '921',
                county: 'T'
            },
            {
                name: '來義鄉',
                zipCode: '922',
                county: 'T'
            },
            {
                name: '萬巒鄉',
                zipCode: '923',
                county: 'T'
            },
            {
                name: '崁頂鄉',
                zipCode: '924',
                county: 'T'
            },
            {
                name: '新埤鄉',
                zipCode: '925',
                county: 'T'
            },
            {
                name: '南州鄉',
                zipCode: '926',
                county: 'T'
            },
            {
                name: '林邊鄉',
                zipCode: '927',
                county: 'T'
            },
            {
                name: '東港鎮',
                zipCode: '928',
                county: 'T'
            },
            {
                name: '琉球鄉',
                zipCode: '929',
                county: 'T'
            },
            {
                name: '佳冬鄉',
                zipCode: '931',
                county: 'T'
            },
            {
                name: '新園鄉',
                zipCode: '932',
                county: 'T'
            },
            {
                name: '枋寮鄉',
                zipCode: '940',
                county: 'T'
            },
            {
                name: '枋山鄉',
                zipCode: '941',
                county: 'T'
            },
            {
                name: '春日鄉',
                zipCode: '942',
                county: 'T'
            },
            {
                name: '獅子鄉',
                zipCode: '943',
                county: 'T'
            },
            {
                name: '車城鄉',
                zipCode: '944',
                county: 'T'
            },
            {
                name: '牡丹鄉',
                zipCode: '945',
                county: 'T'
            },
            {
                name: '恆春鎮',
                zipCode: '946',
                county: 'T'
            },
            {
                name: '滿州鄉',
                zipCode: '947',
                county: 'T'
            },
            {
                name: '臺東市',
                zipCode: '950',
                county: 'V'
            },
            {
                name: '綠島鄉',
                zipCode: '951',
                county: 'V'
            },
            {
                name: '蘭嶼鄉',
                zipCode: '952',
                county: 'V'
            },
            {
                name: '延平鄉',
                zipCode: '953',
                county: 'V'
            },
            {
                name: '卑南鄉',
                zipCode: '954',
                county: 'V'
            },
            {
                name: '鹿野鄉',
                zipCode: '955',
                county: 'V'
            },
            {
                name: '關山鎮',
                zipCode: '956',
                county: 'V'
            },
            {
                name: '海端鄉',
                zipCode: '957',
                county: 'V'
            },
            {
                name: '池上鄉',
                zipCode: '958',
                county: 'V'
            },
            {
                name: '東河鄉',
                zipCode: '959',
                county: 'V'
            },
            {
                name: '成功鎮',
                zipCode: '961',
                county: 'V'
            },
            {
                name: '長濱鄉',
                zipCode: '962',
                county: 'V'
            },
            {
                name: '太麻里鄉',
                zipCode: '963',
                county: 'V'
            },
            {
                name: '金峰鄉',
                zipCode: '964',
                county: 'V'
            },
            {
                name: '大武鄉',
                zipCode: '965',
                county: 'V'
            },
            {
                name: '達仁鄉',
                zipCode: '966',
                county: 'V'
            },
            {
                name: '花蓮市',
                zipCode: '970',
                county: 'U'
            },
            {
                name: '新城鄉',
                zipCode: '971',
                county: 'U'
            },
            {
                name: '秀林鄉',
                zipCode: '972',
                county: 'U'
            },
            {
                name: '吉安鄉',
                zipCode: '973',
                county: 'U'
            },
            {
                name: '壽豐鄉',
                zipCode: '974',
                county: 'U'
            },
            {
                name: '鳳林鎮',
                zipCode: '975',
                county: 'U'
            },
            {
                name: '光復鄉',
                zipCode: '976',
                county: 'U'
            },
            {
                name: '豐濱鄉',
                zipCode: '977',
                county: 'U'
            },
            {
                name: '瑞穗鄉',
                zipCode: '978',
                county: 'U'
            },
            {
                name: '萬榮鄉',
                zipCode: '979',
                county: 'U'
            },
            {
                name: '玉里鎮',
                zipCode: '981',
                county: 'U'
            },
            {
                name: '卓溪鄉',
                zipCode: '982',
                county: 'U'
            },
            {
                name: '富里鄉',
                zipCode: '983',
                county: 'U'
            },
            {
                name: '金沙鎮',
                zipCode: '890',
                county: 'W'
            },
            {
                name: '金湖鎮',
                zipCode: '891',
                county: 'W'
            },
            {
                name: '金寧鄉',
                zipCode: '892',
                county: 'W'
            },
            {
                name: '金城鎮',
                zipCode: '893',
                county: 'W'
            },
            {
                name: '烈嶼鄉',
                zipCode: '894',
                county: 'W'
            },
            {
                name: '烏坵鄉',
                zipCode: '896',
                county: 'W'
            },
            {
                name: '南竿鄉',
                zipCode: '209',
                county: 'Z'
            },
            {
                name: '北竿鄉',
                zipCode: '210',
                county: 'Z'
            },
            {
                name: '莒光鄉',
                zipCode: '211',
                county: 'Z'
            },
            {
                name: '東引鄉',
                zipCode: '212',
                county: 'Z'
            }
        ]
        const countyDefault = {
            name: '',
            param: ''
        }
        const zoneDefault = {
            name: '',
            zipCode: '',
            county: '',
            countyName: ''
        }

        const selectedCounty = ref(countyDefault)
        const selectedZone = ref(zoneDefault)
        const counties = countyList
        const zones = computed(() =>
            zoneList.filter(zone => zone.county === selectedCounty.value.param).map(d => {
                return {
                    ...d,
                    countyName: selectedCounty.value.name
                }
            })
        )
        const resetCounty = () => {
            selectedZone.value = zoneDefault
            emit('getSelectedZone', selectedZone)
        }

        const getSelectedZone = () => {
            emit('getSelectedZone', selectedZone)
        }

        return {
            selectedCounty,
            selectedZone,
            counties,
            zones,
            resetCounty,
            getSelectedZone
        }
    }
})
</script>

<style>
.TwZipSelectCore__wrapper {
	width: 100%;
	padding: 5px;
	display: flex;
}

@media screen and (max-width: 500px) {
	.TwZipSelectCore__wrapper {
		flex-wrap: wrap;
	}
}

.TwZipSelectCore__wrapper .TwZipSelectCore__select {
	text-align-last: center;
	width: 50%;
	max-width: 300px;
	padding: 5px 0px;
	height: 2rem;
	margin: 10px;
}

@media screen and (max-width: 500px) {
	.TwZipSelectCore__wrapper .TwZipSelectCore__select {
		max-width: unset;
		width: 100%;
	}
}

.TwZipSelectCore__wrapper .TwZipSelectCore__select option {
	direction: ltr;
}
</style>
