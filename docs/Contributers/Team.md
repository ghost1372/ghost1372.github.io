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
    avatar: 'https://avatars.githubusercontent.com/u/9213496?v=4',
    name: 'Mahdi Hosseini',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/ghost1372' },
      { icon: 'messenger', link: 'https://t.me/MMahdi72' },
    ]
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/79853146?v=4',
    name: 'Tinodin',
    title: 'Contributer',
    links: [
      { icon: 'github', link: 'https://github.com/tinodin' },
    ]
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/63837495?v=4',
    name: 'hoshiizumiya',
    title: 'Contributer',
    links: [
      { icon: 'github', link: 'https://github.com/hoshiizumiya' },
    ]
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/10946850?v=4',
    name: 'jp-weber',
    title: 'Contributer',
    links: [
      { icon: 'github', link: 'https://github.com/jp-weber' },
    ]
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/62325494?v=4',
    name: 'Poker-sang',
    title: 'Contributer',
    links: [
      { icon: 'github', link: 'https://github.com/Poker-sang' },
    ]
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/125177842?v=4',
    name: 'LanHuangJG',
    title: 'Contributer',
    links: [
      { icon: 'github', link: 'https://github.com/LanHuangJG' },
    ]
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/54832272?v=4',
    name: 'JeremyWu917',
    title: 'Contributer',
    links: [
      { icon: 'github', link: 'https://github.com/JeremyWu917' },
    ]
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/23702345?v=4',
    name: 'Damix48',
    title: 'Contributer',
    links: [
      { icon: 'github', link: 'https://github.com/Damix48' },
    ]
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/1582730?v=4',
    name: 'xasx',
    title: 'Contributer',
    links: [
      { icon: 'github', link: 'https://github.com/xasx' },
    ]
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/80087248?v=4',
    name: 'ryanlua',
    title: 'Contributer',
    links: [
      { icon: 'github', link: 'https://github.com/ryanlua' },
    ]
  },
    {
    avatar: 'https://avatars.githubusercontent.com/u/51733876?v=4',
    name: 'AlexanderBlackman',
    title: 'Contributer',
    links: [
      { icon: 'github', link: 'https://github.com/AlexanderBlackman' },
    ]
  },
]
const sortedMembers = [
  ...members.filter(member => member.title === 'Creator'),
  ...members
    .filter(member => member.title !== 'Creator')
    .sort((a, b) => a.name.localeCompare(b.name))
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Contributers
    </template>
    <template #lead>
      Thank you for helping make DevWinUI better! 
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers :members="sortedMembers" />
</VPTeamPage>