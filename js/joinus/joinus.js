var jobInfo = document.getElementById('jobInfo');
var jobBody = document.getElementById('job-body');
var inp = document.getElementById('search-inp');
var btn = document.getElementById('search-btn');
var content = [];
var digit = null;

var data = [
  {
    itemTitle: ['高级开发工程师', '技术类（云计算研发方向）', '北京', '2017-06-28'],
    descript: {
      duty: [
        '负责国美云产品计算、虚拟化组件方案架构设计、开发实现和优化工作。',
        '从技术、运维多角度，对创云物理/虚拟化网络的稳定性、高可用和高性能负责。'
      ],
      Requirement: [
        '2年以上云计算研发项目经验；',
        '熟练使用Python、C/C++、Java或其他脚本语言；',
        '精通 Linux内核，熟悉KVM/VMware虚拟化，具有OpenStack开发经验；',
        '熟悉Kubernetes、Docker、Mesos、Openstack等主流开源项目架构和源码；',
        '热衷前沿技术的探索，能快速掌握和理解新技术；具备良好的团队合作精神，善于沟通交流；',
        '具有开源项目贡献经验者优先；',
      ]
    }
  },
  {
    itemTitle: ['高级开发工程师', '技术类（云网络研发方向）', '北京', '2017-06-28'],
    descript: {
      duty: [
        '负责国美云产品网络部分方案架构设计、开发实现和优化工作；',
        '从技术、运维多角度，对创云物理/虚拟化网络的稳定性、高可用和高性能负责；'
      ],
      Requirement: [
        '熟悉linux操作系统网络协议栈并有相关开发经验的优先（偏2/3层，netfilter）',
        '熟悉常用网络设备配置，比如VLAN，路由，iptables,OSPF,VPN等',
        '熟悉常用网络技术 gre,vxlan，VPN，VRRP，TC等',
        '熟悉SDN技术优先，比如OpenFlow，OpenVSwitch，如开发过SDN控制器者优先',
        '熟悉Openstack Neutron开发经验优先；',
        '有大中型网站或公司机房网络设计经验优先；',
      ]
    }
  },
  {
    itemTitle: ['高级开发工程师', '技术类（存储研发方向）', '北京', '2017-06-28'],
    descript: {
      duty: [
        '研究与开发云存储系统平台，分布式文件系统；',
        '参与云存储系统的开发：分布式文件系统，云存储接口;',
        '跟踪分布式文件系统、云存储的发展趋势，去掌握新技术和创新;'
      ],
      Requirement: [
        '计算机、信息技术等相关专业；',
        '熟悉TCP/IP、DNS等底层协议，精通HTTP协议，熟练掌握各种工具进行网络问题诊断；',
        '熟悉ceph，有ceph源码级维护经验；',
        '熟悉海量小文件云存储，有分析其代码实现经验者优先；',
        '熟练掌握Linux环境下的Python、C++等1至2种语言，有良好的编码习惯；',
        '有一定的技术文档的编写能力。',
        '具有开放的心态，愿意接受新技术和新知识的能力；',
        '责任心强，具有良好的沟通能力和团队合作精神。'
      ]
    }
  },
  {
    itemTitle: ['经理', '职能类', '北京', '2017-06-28'],
    descript: {
      duty: [
        '负责国美云平台系统部日常管理工作;',
        '配合项目经理以及产品经理，把控平台产品，带领团队完成产品的研发工作;',
        '把握平台技术发展方向，紧跟主流技术，并将技术应用到产品之中，不断推动产品的技术升级;'
      ],
      Requirement: [
        '5年以上系统研发经验；两年以上团队管理经验；具有大团队（超过50人）管理经验着优先;',
        '良好的沟通协调能力，有大项目经验者优先;',
        '熟悉主流开发语言，Java /Python/Go，具有Python大系统开发经验者优先',
        '熟悉云计算平台，从事相关方向开发与管理工作这优先',
      ]
    }
  },
  {
    itemTitle: ['架构师', '技术类（云平台产品方向）', '北京', '2017-06-28'],
    descript: {
      duty: [
        '负责国美云平台产品架构规划，技术选型，功能划分，接口实现',
        '带领技术人员进行技术攻关，主持完成核心功能的开发，以及整体框架的稳定',
        '指导研发人员解决生产出现的问题，根据业务发展不断优化平台架构'
      ],
      Requirement: [
        '8年以上系统研发经验，3年以上架构经验。具有高并发，分布式系统经验者优先',
        '熟悉主流开发语言以及特性（Java/Python/Go），并使用过这些语言开发过大型系统',
        '熟悉架构设计原则以及当前常用架构理念并具有运用实践',
        '责任心强，具有自驱力，能不断打磨技术，推动产品的技术升级',
        '具有良好的沟通与协调能力以及团队合作精神',
      ]
    }
  },
  {
    itemTitle: ['信息安全工程师', '技术类（云产品安全方向）', '北京', '2017-06-28'],
    descript: {
      duty: [
        '负责国美云产品的安全工作。包括代码安全，信息安全，系统安全',
        '负责搭建国美云信息安全体系，定制相应的安全标准、安全方案并监督执行',
        '负责处理国美云产品的安全故障，保证系统的稳定运行'
      ],
      Requirement: [
        '3年以上安全领域工作经验',
        '熟悉系统加固，信息加密，接口验证等常用安全防护手段',
        '具有DDOS，CC攻击防护经验，具有相关产品研发经验者优先',
        '具有代码安全审计经验，从事过代码安全审计产品开发经验者优先',
      ]
    }
  },
  {
    itemTitle: ['架构师', '技术类（硬件设备管理方向）', '北京', '2017-06-28'],
    descript: {
      duty: [
        '服务器硬件选型及容量规划，硬件运维及故障跟踪',
        '统筹机房现场环境实施和交付，上架和调试，做好项目管理',
        'Linux系统、服务器运维工作，包括：安装部署、系统监控、故障定位恢复、系统安全、性能优化等 ',
        '运维工具规划与建设，新技术研究和应用',
        '完成团队Leader安排的其他任务。'
      ],
      Requirement: [
        '3年以上互联网系统、服务器运维经验，优秀的学习能力和故障排查经验',
        '良好的沟通和项目管理能力，对运维工作有浓厚兴趣，能够承受较大的工作压力，对行业技术敏感度高，责任心强',
        '了解网络架构，熟悉服务器、网络硬件相关知识，深入理解linux系统，精通shell、awk等工具，能熟练使用python/shell之一来开发运维工具 ',
        '熟悉常用开源软件的安装、配置和使用 ',
        '熟悉TCP/IP协议，熟悉DNS、NTP、HTTP、MySQL等',
        '掌握4-7层负载均衡运维部署及性能调优（如LVS、NAT、Haproxy、Nginx），会内核调优的优先考虑',
        '有大规模服务器自动化安装、自动化运维经验的优先考虑'
      ]
    }
  },
  {
    itemTitle: ['架构师', '技术类（基础架构管理方向）', '北京', '2017-06-28'],
    descript: {
      duty: [
        '负责私有云平台的总体规划与架构设计工作',
        '负责云平台的稳定性和技术架构的持续优化',
        '负责虚拟化关键模块的技术攻关以及新技术探索',
        '负责虚拟化核心技术的研究、开发、功能改进等工作',
        '负责解决私有云部署、开发、运维中出现的各种问题',
      ],
      Requirement: [
        '5年以上互联网领域工作经验，熟悉主流云计算平台技术架构',
        '熟悉云计算架构和相关技术理论，有实际云计算项目实施经验',
        '对云计算相关技术有较深的研究和了解，熟悉OpenStack/Docker/Cloudstack等',
        '深刻理解OpenStack架构，包括计算、存储、网络等',
        '熟悉Linux软件和硬件环境、系统管理和优化 ',
        '精通Python, 有一定开发经验',
        '熟悉Linux自动化管理工具，如puppet/saltstack等',
        '熟悉WEB相关技术及常见数据库，如Nginx/Tomcat/MySQL/Oracle等',
        '熟悉持续集成和持续部署概念，熟练使用相应工具',
        '主动性强，具有良好的沟通、协调和组织能力，富有团队精神',
        '有大规模OpenStack研发及部署经验者优先'
      ]
    }
  },
  {
    itemTitle: ['高级产品经理', '职能类', '北京', '2017-06-28'],
    descript: {
      duty: [
        '密切跟踪云计算的技术发展，负责公司云计算平台和应用的产品设计、策略规划及产品推广工作；',
        '根据公司战略和技术能力，合理规划产品开发计划，协调跨团队合作和执行；',
        '商业云平台产品规划设计及实施落地：负责商业云版本规划，建设里程碑计划，并引导研发团队按照里程碑计划完成平台版本开发和上线；',
        '云服务商业流程设计：负责云服务核心商业流程设计，云平台核心能力与服务目录规划和设计；',
        '负责对来自用户和公司内部的产品相关需求进行管理、分析，并最终形成产品需求文档，为研发及销售团队提供广泛支持；',
        '负责公司云计算产品的持续优化等相关工作。',
      ],
      Requirement: [
        '7年以上云服务平台的规划、设计工作经验，有带领团队完成相关云平台的规划及实施的成功经验；',
        '具备与价值链上下游合作伙伴沟通合作的能力，与圈内的上下游合作伙伴有良好的关系及合作经验，能够根据需要寻找合适的技术合作伙伴完成整个平台的建设；',
        '具备大型、全球跨区域云服务系统的设计及实施能力与经验，了解相关的实施技术，如：全球组网、VPN、CDN、异构云实施等方面的设计实施经验；',
        '出色的产品规划能力和逻辑分析能力抽象、集成整合能力；',
        '能够从商业目标出发识别关键需求，结合移动化、电商化、产业互联网、大数据等趋势，识别关键业务场景及服务需求；',
        '具备跨团队沟通及协调推动能力，具备高层沟通能力；具备业界论坛发言能力、具备业界影响力者优先。',
      ]
    }
  },
  {
    itemTitle: ['架构师', '技术类（应用系统管理方向）', '北京', '2017-06-28'],
    descript: {
      duty: [
        '负责SAP系统整个生命周期的管理，包括基于SOA的架构进行系统架构分析、设计、优化，提出软件和系统架构的整体设计方案(满足高并发、高可用、高扩展性)，软件功能模块划分等，制定系统规划和策略，落实监督系统的策划、设计、定义、开发、上线及更新叠代；',
        '推动主要的技术决策，进行技术风险评估，并最终表达为产品构架；',
        '独立设计产品原型图及需求文档；思维脑图等详细设计文档；',
        '负责后台系统的相关管理工作，制定产品项目管理流程、阶段目标、产品关键KPI，分解任务目标，并协调研发、设计、运营等其他部门，确保项目按时保质完成；',
        '对产品进行持续优化和改进，完善功能，不断提升产品用户体验；发现、分析、解决产品线问题；',
      ],
      Requirement: [
        '6年以上大型软件或者互联网企业工作经验，至少3年以上系统后台架构经验；',
        '精通面向服务架构（SOA），熟悉常用架构设计模式和主流设计工具，能进行系统建模、总体设计；',
        '有java或者相关开发经验，3年以上架构设计经验；',
        '对NO SQL数据库,规则引擎，大数据并发处理,hadoop&habase一项或者多项的了解；',
        '熟悉Oracle、MySQL等主流数据库，具备大数据量系统架构经验；',
        '熟悉性能调优（JVM、VM、OS）；',
        '熟悉memcache、redis等缓存技术使用；',
        '具备分布式、缓存、消息、负载均衡等机制和实现；',
        '良好的沟通能力、团队合作精神；敢于承担、学习能力强；',
        '较好的逻辑思维和框架性思维，能够设计产品架构来支撑复杂的业务需求，并且清晰的传达给团队成员；',
        '具备行业理解能力，熟悉互联网环境，对市场发展趋势有敏锐的洞察力和创新意识。'
      ]
    }
  },
  {
    itemTitle: ['高级运维工程师（DBA）', '技术类（应用系统管理方向）', '北京', '2017-06-28'],
    descript: {
      duty: [
        '负责数据库系统的架构设计、开发、优化、安全；',
        '负责ORACLE、MYSQL、Goldengate等产品的日常运维工作：安装配置、日常监控、优化、应用部署、故障定位处理等；',
        '负责Oracle和mysql数据库性能监控和调优，SQL review，数据备份/恢复计划的制定、执行；',
        '负责依据业务需求优化数据存储结构，负责数据库系统部署方案的计划、设计和实施；',
        '负责对应用程序进行审查，为开发人员提供数据库支持。如数据库迁移，测试库安装，数据导入等；',
        '负责系统数据库定期检查，进行性能分析与调优，定期对中间件产品进行健康检查并出具检查报告，充分保证信息系统数据的安全及系统高效运行。',
      ],
      Requirement: [
        '计算机或相关专业本科以上，有过大型数据库集群管理维护经验者优先；',
        '5年以上ORACLE DBA经验，精通数据库管理与优化, 熟练存储过程；熟悉mysql redis维护，了解mysql常见中间件技术Cobar，MyCat等；',
        '精通数据库设计，管理和性能调优，熟练掌握ORACLE、MYSQL数据库的备份和恢复技术，以及Goldengate的复制技术；',
        '精通数据库原理、精通数据库核心参数的设置和调整；',
        '熟练掌握ORACLE、MYSQL等数据库系统在不同平台下的安装配置管理、升级迁移、等维护技术；',
        '熟悉数据库调优方法；能够基于业务需求，提供数据库解决方案；',
        '熟悉Linux操作系统，熟悉python/go/shell等语言中至少一种，具有良好编程风格，善于通过程序解决日常效率问题；',
        '拥有良好的沟通表达能力和服务意识，有较强的团队合作意识，快速处理系统突发事件的能力；',
        '熟悉redis/mongodb/cassandra 等nosql系统，有相关的DBA认证证书者优先。',
      ]
    }
  },
  {
    itemTitle: ['高级运维工程师（DBA）', '技术类（应用产品支持方向）', '北京', '2017-06-28'],
    descript: {
      duty: [
        '负责数据库系统的架构设计、开发、优化、安全；',
        '负责ORACLE、MYSQL、Goldengate等产品的日常运维工作：安装配置、日常监控、优化、应用部署、故障定位处理等；',
        '负责Oracle和mysql数据库性能监控和调优，SQL review，数据备份/恢复计划的制定、执行；',
        '负责依据业务需求优化数据存储结构，负责数据库系统部署方案的计划、设计和实施；',
        '负责对应用程序进行审查，为开发人员提供数据库支持。如数据库迁移，测试库安装，数据导入等；',
        '负责系统数据库定期检查，进行性能分析与调优，定期对中间件产品进行健康检查并出具检查报告，充分保证信息系统数据的安全及系统高效运行。',
      ],
      Requirement: [
        '计算机或相关专业本科以上，有过大型数据库集群管理维护经验者优先；',
        '5年以上ORACLE DBA经验，精通数据库管理与优化, 熟练存储过程；熟悉mysql redis维护，了解mysql常见中间件技术Cobar，MyCat等；',
        '精通数据库设计，管理和性能调优，熟练掌握ORACLE、MYSQL数据库的备份和恢复技术，以及Goldengate的复制技术；',
        '精通数据库原理、精通数据库核心参数的设置和调整；',
        '熟练掌握ORACLE、MYSQL等数据库系统在不同平台下的安装配置管理、升级迁移、等维护技术；',
        '熟悉数据库调优方法；能够基于业务需求，提供数据库解决方案；',
        '熟悉Linux操作系统，熟悉python/go/shell等语言中至少一种，具有良好编程风格，善于通过程序解决日常效率问题；',
        '拥有良好的沟通表达能力和服务意识，有较强的团队合作意识，快速处理系统突发事件的能力；',
        '熟悉redis/mongodb/cassandra 等nosql系统，有相关的DBA认证证书者优先。',
      ]
    }
  },
];

loadHtml(data);
jobBody.innerHTML = content[0];
pagination();
inp.addEventListener('keypress', function(event) {
  if(event.keyCode == 13) {  
    search();
  }  
});
  
btn.onclick = search;

// 搜索
function search() {
  var nowData = []; 
  content = [];
  if(inp.value === '') {
    nowData = data;
    loadHtml(nowData);
    pagination();
    jobBody.innerHTML = content[0];
  } else {
    for(var i = 0; i< data.length; i++) {
      if(data[i].itemTitle[0].indexOf(inp.value) !== -1) {
        nowData.push(data[i]);
      } 
    }
    if(nowData.length !== 0) {
      loadHtml(nowData);
      pagination();
      jobBody.innerHTML = content[0];
    } else {
      loadHtml(nowData);
      pagination();
      jobBody.innerHTML = '<p style="text-align: center;margin: 20px 0; color: #1dc3ed;">没有搜索到相关职位！</p>';
    }
  }
}

// 从新计算分页，滚动条置顶
function pagination() {
  $("#page").initPage(digit*10,1,function(page) {
    document.body.scrollTop = 0;
    jobBody.innerHTML = content[page-1];
  });
}

// 引入新数据，从新渲染页面
function loadHtml(data) {
  digit = Math.ceil(data.length/10); // 职位的个数去掉尾数
  for(var jj =0; jj < digit; jj++) {
    content[jj] = '';
  }
  for(var j =0; j < digit; j++) {
    for(var i = 0; i< data.length; i++) {
      var ifDisplay = 'collapse'; // i === 0 ? 'collapse in' : 'collapse';
      var LiOneData = data[i].descript.duty; 
      var LiTowData = data[i].descript.Requirement; 
      var LiOneList = ''; 
      var LiTowList = ''; 

      for(var m = 0; m< LiOneData.length; m++) {
        LiOneList += '<li>'+ LiOneData[m] +'</li>'
      }
      for(var n = 0; n< LiTowData.length; n++) {
        LiTowList += '<li>'+ LiTowData[n] +'</li>'
      }
      if(i >= j*10 && i < (j+1)*10) {
        content[j] += '<div class="job-item"><div class="job-item-title" data-toggle="collapse" data-target="#item'+ i +'"><p class="job-item-head">'+ data[i].itemTitle[0] +'</p><p class="job-item-head" style="text-align:left; padding-left: 30px;">'+ data[i].itemTitle[1] +'</p><p class="job-item-head">'+ data[i].itemTitle[2] +'</p><p class="job-item-head">'+ data[i].itemTitle[3] +' <span class="shrink"></span></p><hr style="margin: 0 20px;" /></div><div id="item'+ i +'" class="'+ ifDisplay +'"><div class="job-detail"><p>岗位职责</p><ul>'+
        LiOneList 
        +'</ul><p>任职资格</p><ul>'+
        LiTowList
        +'</ul> <div class="contentUs"><img src="./images/joinus/3.png" alt=""><span style="margin: 0 20px 0 10px;">简历直达：<a href="mailto:siyu-kg@gome.com.cn">siyu-kg@gome.com.cn</a></span><span>关注微信：aliker</span></div> </div><hr style="margin: 0 20px;" /></div></div>';
      }
    }
  }
}


