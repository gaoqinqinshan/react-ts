const dateFormat = {
  day: {
    year: "numeric" as const,
    month: "long" as const,
    day: "numeric" as const,
    locale: "zh-CN"
  },
  month: {
    year: "numeric" as const,
    month: "long" as const,
    locale: "zh-CN"
  },
  year: {
    year: "numeric" as const,
    locale: "zh-CN"
  },
};

export const timelineItems = [
  {
    date: '2024年11月 - 至今', 
    event: '北京居然之家投资控股集团有限公司 - B端产品经理 B端产品部',
    title: '继续实习',
    description: '我要尝试着做产品，一个懂技术的产品！',
    // icon: '🎥',
    dateFormatOptions: dateFormat.day,
    // metadata: {
    //   video: 'https://player.bilibili.com/player.html?aid=752652004&bvid=BV12k4y197v6&cid=176424111&autoplay=0',
    //   from: 'Kevin '
    // }
  },
  {
    date: '2024-07-11',
    event: '接到外包了！',
    title: '私活',
    description: '虽然是一个外包项目，但是也确实让我有了很多收获，比如：马内 哈哈哈.',
    // icon: '💝',
    // photos: [
    //   { src: '/changelog/2022-01-01-遇见她/IMG_2028.JPG', variant: '4x3' },
    //   { src: '/changelog/2022-01-01-遇见她/IMG_2027.JPG', variant: '4x3' }
    // ],
    dateFormatOptions: dateFormat.day
  },
  {
    date: '2024年07月 - 2024年11月',
    event: '中国地震局第一监测中心 - 软件开发 减灾技术部 ',
    title: '继续实习',
    description: '换了实习工作，依旧开发，但是这一次我更加坚定了重逻辑，轻开发的想法.',
    // icon: '💼',
    // photos: [
    //   { src: '/changelog/2021-06-01-电商实习/IMG_2066.JPG', variant: '1x1' },
    //   { src: '/changelog/2021-06-01-电商实习/IMG_2033.PNG', variant: '1x1' },
    //   { src: '/changelog/2021-06-01-电商实习/IMG_2031.JPG', variant: '4x5' },
    //   { src: '/changelog/2021-06-01-电商实习/IMG_2030.JPG', variant: '4x5' }
    // ],
    dateFormatOptions: dateFormat.year
  },
  {
    date: '2024年04月 - 2024年07月',  
    event: '用友网络科技股份有限公司 - 软件开发 业务与服务支持部',
    title: '继续实习！',
    description: '这段时间，有了上一段导师的指引，这段实习我不仅仅是开发，我还在摸索业务逻辑.',
    // icon: '👮',
    // photos: [
    //   { src: '/changelog/2018-09-01-警校/IMG_2040.JPG', variant: '4x3' },
    //   { src: '/changelog/2018-09-01-警校/IMG_2039.JPG', variant: '4x3' }
    // ],
    dateFormatOptions: dateFormat.year
  },
  {
    date: '2023年04月 - 2023年10月',  
    event: '阿里巴巴集团 - 产品经理 DingTalk事业部',
    title: '第一次实习',
    description: '第一次实习，第一次租房子被坑，第一次在BAT的A工作！又害怕又激动，好在我碰到了一个厉害的导师，谢谢您.',
    // icon: '🏭',
    // photos: [
    //   { src: '/changelog/2018-03-01-电子厂/IMG_2045.JPG', variant: '1x1' },
    //   { src: '/changelog/2018-03-01-电子厂/IMG_2044.JPG', variant: '1x1' },
    //   { src: '/changelog/2018-03-01-电子厂/IMG_2042.JPG', variant: '1x1' }
    // ],
    dateFormatOptions: dateFormat.year
  },
  {
    date: '2022年07月 - 2022年09月',
    event: '字节训练营',
    title: '项目的萌芽',
    description: '第一次从0到1的开发一个项目，既激动又害怕，但是我们成功了！',
    // icon: '📱',
    // photos: [
    //   { src: '/changelog/2008-01-01-第一次拍摄/motorola.png', variant: '4x5' },
    //   { src: '/changelog/2008-01-01-第一次拍摄/IMG_2113.jpg', variant: '4x5' }
    // ],
    dateFormatOptions: dateFormat.year
  },
  {
    date: '2021年11月 - 2022年07月',
    event: '软件开发中心',
    title: '开发的萌芽',
    description: '天天学习，写代码，写代码，写代码，写代码，写代码，写代码，写代码，写代码，写代码，写代码，写代码，写代码，写代码，写代码，写代码，写代码，写代码，写代码，写代码，写代码，写代码，写代码，写代码，写代码，写代码，写代码，写代码，写代码，写代码，写代码，写代码.',
    // icon: '📱',
    // photos: [
    //   { src: '/changelog/2008-01-01-第一次拍摄/motorola.png', variant: '4x5' },
    //   { src: '/changelog/2008-01-01-第一次拍摄/IMG_2113.jpg', variant: '4x5' }
    // ],
    dateFormatOptions: dateFormat.year
  },
  {
    date: '2021-11-06',
    event: '大学的开始',
    title: '重庆移通学院',
    description: '一个普普通通的本科.',
    // icon: '👶',
    // photos: [
    //   { src: '/changelog/1999-01-24-出生/IMG_2051.JPG', variant: '4x5' },
    //   { src: '/changelog/1999-01-24-出生/IMG_2050.JPG', variant: '4x5' },
    //   { src: '/changelog/1999-01-24-出生/IMG_2049.JPG', variant: '4x5' },
    //   { src: '/changelog/1999-01-24-出生/IMG_2048.JPG', variant: '4x5' },
    //   { src: '/changelog/1999-01-24-出生/IMG_2047.JPG', variant: '4x3' },
    //   { src: '/changelog/1999-01-24-出生/IMG_2046.JPG', variant: '1x1' },
    //   { src: '/changelog/1999-01-24-出生/IMG_2041.JPG', variant: '4x3' }
    // ],
    dateFormatOptions: dateFormat.day
  }
];

export const changelog = timelineItems
  .filter(item => item.date) // Filter out items with empty dates
  .sort((a, b) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();
    return dateB - dateA;
  }); 