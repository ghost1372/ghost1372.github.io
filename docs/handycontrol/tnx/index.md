---
layout: page
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
{
  avatar: 'https://avatars.githubusercontent.com/u/17383395?v=4',
  name: 'Nabian',
  title: 'Creator',
  links: [
    { icon: 'github', link: 'https://github.com/Nabian' },
  ],
},
{
  avatar: 'https://avatars0.githubusercontent.com/u/9213496?s=64&v=4',
  name: 'ghost1372',
  title: 'Creator',
  links: [
    { icon: 'github', link: 'https://github.com/ghost1372' },
  ],
},
{
  avatar: 'https://avatars0.githubusercontent.com/u/8541016?s=64&v=4',
  name: 'Dingping Zhang',
  title: 'Contributer',
  links: [
    { icon: 'github', link: 'https://github.com/DingpingZhang' },
  ],
},
{
  avatar: 'https://avatars0.githubusercontent.com/u/17201053?s=64&v=4',
  name: 'M0n7y5',
  title: 'Contributer',
  links: [
    { icon: 'github', link: 'https://github.com/M0n7y5' },
  ],
},
{
  avatar: 'https://avatars1.githubusercontent.com/u/25916858?s=64&v=4',
  name: 'guanguanchuangyu',
  title: 'Contributer',
  links: [
    { icon: 'github', link: 'https://github.com/guanguanchuangyu' },
  ],
},
{
  avatar: 'https://avatars0.githubusercontent.com/u/16846702?s=64&v=4',
  name: 'yanchao891012',
  title: 'Contributer',
  links: [
    { icon: 'github', link: 'https://github.com/yanchao891012' },
  ],
},
{
  avatar: 'https://avatars3.githubusercontent.com/u/21022467?s=64&v=4',
  name: 'noctwolf',
  title: 'Contributer',
  links: [
    { icon: 'github', link: 'https://github.com/noctwolf' },
  ],
},
{
  avatar: 'https://avatars1.githubusercontent.com/u/22339210?s=64&v=4',
  name: 'xianyun666',
  title: 'Contributer',
  links: [
    { icon: 'github', link: 'https://github.com/xianyun666' },
  ],
},
{
  avatar: 'https://avatars1.githubusercontent.com/u/19919631?s=64&v=4',
  name: 'afunc233',
  title: 'Contributer',
  links: [
    { icon: 'github', link: 'https://github.com/afunc233' },
  ],
},
{
  avatar: 'https://avatars1.githubusercontent.com/u/6076257?s=64&v=4',
  name: 'DinoChan',
  title: 'Contributer',
  links: [
    { icon: 'github', link: 'https://github.com/DinoChan' },
  ],
},
{
  avatar: 'https://avatars2.githubusercontent.com/u/16384123?s=64&v=4',
  name: 'MrZhangYuan',
  title: 'Contributer',
  links: [
    { icon: 'github', link: 'https://github.com/MrZhangYuan' },
  ],
},
{
  avatar: 'https://avatars0.githubusercontent.com/u/47024703?s=64&v=4',
  name: 'JinhuaChen-OMEC',
  title: 'Contributer',
  links: [
    { icon: 'github', link: 'https://github.com/JinhuaChen-OMEC' },
  ],
},
{
  avatar: 'https://avatars2.githubusercontent.com/u/5851975?s=64&v=4',
  name: 'seedtyx',
  title: 'Contributer',
  links: [
    { icon: 'github', link: 'https://github.com/seedtyx' },
  ],
},
{
  avatar: 'https://avatars2.githubusercontent.com/u/34428802?s=64&v=4',
  name: 'KleinPan',
  title: 'Contributer',
  links: [
    { icon: 'github', link: 'https://github.com/KleinPan' },
  ],
},
{
  avatar: 'https://avatars3.githubusercontent.com/u/10378954?s=64&v=4',
  name: 'yxhq',
  title: 'Contributer',
  links: [
    { icon: 'github', link: 'https://github.com/yxhq' },
  ],
},
{
  avatar: 'https://avatars3.githubusercontent.com/u/5195234?s=64&v=4',
  name: 'AiHaibara',
  title: 'Contributer',
  links: [
    { icon: 'github', link: 'https://github.com/AiHaibara' },
  ],
},
{
  avatar: 'https://avatars3.githubusercontent.com/u/9959623?s=64&v=4',
  name: 'walterlv',
  title: 'Contributer',
  links: [
    { icon: 'github', link: 'https://github.com/walterlv' },
  ],
},
{
  avatar: 'https://avatars2.githubusercontent.com/u/29297262?s=64&v=4',
  name: 'Luoyingliang',
  title: 'Contributer',
  links: [
    { icon: 'github', link: 'https://github.com/Luoyingliang' },
  ],
},
{
  avatar: 'https://avatars3.githubusercontent.com/u/16054566?s=64&v=4',
  name: 'lindexi',
  title: 'Contributer',
  links: [
    { icon: 'github', link: 'https://github.com/lindexi' },
  ],
},
{
  avatar: 'https://avatars1.githubusercontent.com/u/4672627?s=64&v=4',
  name: 'danwalmsley',
  title: 'Contributer',
  links: [
    { icon: 'github', link: 'https://github.com/danwalmsley' },
  ],
},
{
  avatar: 'https://avatars0.githubusercontent.com/u/17864005?s=64&v=4',
  name: 'varKeytrap',
  title: 'Contributer',
  links: [
    { icon: 'github', link: 'https://github.com/varKeytrap' },
  ],
},
]
const sortedMembers = [
  ...members.filter(member => member.title === 'Creator'),
  ...members
    .filter(member => member.title !== 'Creator')
    .sort((a, b) => a.name.localeCompare(b.name))
]

const sponsors = [
{
  avatar: 'https://raw.githubusercontent.com/HandyOrg/HandyOrgResource/master/HandyControl/Resources/vs2019_logo.png',
  name: 'Visual Studio Community 2019',
  title: 'Open Source License Sponsor',
  links: [
    { icon: 'microsoft', link: 'https://visualstudio.microsoft.com/free-developer-offers/' },
  ],
},
{
  avatar: 'https://raw.githubusercontent.com/HandyOrg/HandyOrgResource/master/HandyControl/Resources/resharper_logo.png',
  name: 'JetBrains',
  title: 'Open Source License Sponsor',
  links: [
    { icon: 'jetbrains', link: 'https://www.jetbrains.com/?from=HandyControl' },
  ],
},
]

const donors = [
  {
    avatar: 'https://avatars1.githubusercontent.com/u/49062011?s=64&v=4',
    name: 'bigorange1900',
    title: 'Open Source Contributor',
    links: [
      { icon: 'github', link: 'https://github.com/bigorange1900' },
    ],
  },
  {
    avatar: 'https://avatars3.githubusercontent.com/u/27358331?s=64&v=4',
    name: '14632791',
    title: 'Open Source Contributor',
    links: [
      { icon: 'github', link: 'https://github.com/14632791' },
    ],
  },
  {
    avatar: 'https://avatars2.githubusercontent.com/u/51181716?s=64&v=4',
    name: 'IUpdatable',
    title: 'Open Source Contributor',
    links: [
      { icon: 'github', link: 'https://github.com/IUpdatable' },
    ],
  },
  {
    avatar: 'https://avatars1.githubusercontent.com/u/13778095?s=64&v=4',
    name: 'maplewei',
    title: 'Open Source Contributor',
    links: [
      { icon: 'github', link: 'https://github.com/maplewei' },
    ],
  },
  {
    avatar: 'https://avatars1.githubusercontent.com/u/34593206?s=64&v=4',
    name: 'sunshang-hl',
    title: 'Open Source Contributor',
    links: [
      { icon: 'github', link: 'https://github.com/sunshang-hl' },
    ],
  },
  {
    avatar: 'https://avatars1.githubusercontent.com/u/51224259?s=64&v=4',
    name: 'yangkang326',
    title: 'Open Source Contributor',
    links: [
      { icon: 'github', link: 'https://github.com/yangkang326' },
    ],
  },
  {
    avatar: 'https://avatars3.githubusercontent.com/u/7257543?s=64&v=4',
    name: 'zmrbak',
    title: 'Open Source Contributor',
    links: [
      { icon: 'github', link: 'https://github.com/zmrbak' },
    ],
  },
  {
    avatar: 'https://avatars0.githubusercontent.com/u/31465314?s=64&v=4',
    name: 'AFei19911012',
    title: 'Open Source Contributor',
    links: [
      { icon: 'github', link: 'https://github.com/AFei19911012' },
    ],
  },
  {
    avatar: 'https://avatars0.githubusercontent.com/u/21210915?s=64&v=4',
    name: 'wayne2006',
    title: 'Open Source Contributor',
    links: [
      { icon: 'github', link: 'https://github.com/wayne2006' },
    ],
  },
  {
    avatar: 'https://avatars1.githubusercontent.com/u/53053537?s=64&v=4',
    name: 'towerDLH',
    title: 'Open Source Contributor',
    links: [
      { icon: 'github', link: 'https://github.com/towerDLH' },
    ],
  },
  {
    avatar: 'https://avatars3.githubusercontent.com/u/24750822?s=64&v=4',
    name: 'BluceBosen',
    title: 'Open Source Contributor',
    links: [
      { icon: 'github', link: 'https://github.com/BluceBosen' },
    ],
  },
  {
    avatar: 'https://avatars2.githubusercontent.com/u/16384123?s=64&v=4',
    name: 'MrZhangYuan',
    title: 'Open Source Contributor',
    links: [
      { icon: 'github', link: 'https://github.com/MrZhangYuan' },
    ],
  },
  {
    avatar: 'https://avatars2.githubusercontent.com/u/49895722?s=64&v=4',
    name: 'YC946586',
    title: 'Open Source Contributor',
    links: [
      { icon: 'github', link: 'https://github.com/YC946586' },
    ],
  },
  {
    avatar: 'https://avatars0.githubusercontent.com/u/26402999?s=64&v=4',
    name: 'wihalo',
    title: 'Open Source Contributor',
    links: [
      { icon: 'github', link: 'https://github.com/wihalo' },
    ],
  },
  {
    avatar: 'https://avatars0.githubusercontent.com/u/898009?s=64&v=4',
    name: 'startewho',
    title: 'Open Source Contributor',
    links: [
      { icon: 'github', link: 'https://github.com/startewho' },
    ],
  },
  {
    avatar: 'https://avatars1.githubusercontent.com/u/3361135?s=64&v=4',
    name: '5653325',
    title: 'Open Source Contributor',
    links: [
      { icon: 'github', link: 'https://github.com/5653325' },
    ],
  },
  {
    avatar: 'https://avatars0.githubusercontent.com/u/46678241?s=64&v=4',
    name: 'LostAsk',
    title: 'Open Source Contributor',
    links: [
      { icon: 'github', link: 'https://github.com/LostAsk' },
    ],
  },
  {
    avatar: 'https://avatars3.githubusercontent.com/u/25658690?s=64&v=4',
    name: 'sanshiliuxiao',
    title: 'Open Source Contributor',
    links: [
      { icon: 'github', link: 'https://github.com/sanshiliuxiao' },
    ],
  },
  {
    avatar: 'https://avatars2.githubusercontent.com/u/28100716?s=64&v=4',
    name: 'QJJMSK',
    title: 'Open Source Contributor',
    links: [
      { icon: 'github', link: 'https://github.com/QJJMSK' },
    ],
  },
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Contributers
    </template>
    <template #lead>
      Thanks to the following Coder for providing code contributions
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers :members="sortedMembers" />
</VPTeamPage>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Sponsors
    </template>
    <template #lead>
      Thanks to the following organizations for providing open source licenses
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers :members="sponsors" />
</VPTeamPage>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Donors
    </template>
    <template #lead>
      Thanks to the following donors
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers :members="donors" />
</VPTeamPage>


