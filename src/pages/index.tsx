import React, { ReactNode, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import Logo from '@/assets/images/logo.png';
import Component from '@/assets/images/component.png';
import Guide from '@/assets/images/guide.png';
import Resource from '@/assets/images/resource.png';
import ListsMenus from './ListsMenus';
import './index.less';

const Index: React.SFC = () => {
  const CanvasRef: React.LegacyRef<HTMLCanvasElement> = useRef();
  const [cards] = useState<any[]>([
    {
      id: 1,
      url: '/guide',
      imgUrl: Guide,
      title: '指南',
      description: '了解设计指南，帮助产品设计人员搭建逻辑清晰、结构合理且高效易用的产品。'
    },
    {
      id: 2,
      url: '/components',
      imgUrl: Component,
      title: '组件',
      description: '使用组件 Demo 快速体验交互细节；使用前端框架封装的代码帮助工程师快速开发。'
    },
    {
      id: 3,
      url: '/',
      imgUrl: Guide,
      title: '主题',
      description: '在线主题编辑器，可视化定制和管理站点主题、组件样式。'
    },
    {
      id: 4,
      url: '/',
      imgUrl: Resource,
      title: '资源',
      description: '下载相关资源，用其快速搭建页面原型或高保真视觉稿，提升产品设计效率。'
    },
  ])

  const initWater = () => {
    // 获取canvas容器
    const canvas = CanvasRef.current;
    // 获得画笔
    const ctx = canvas.getContext('2d');
    //如果浏览器支持requestAnimFrame则使用requestAnimFrame否则使用setTimeout 
    const requestAnimationFrame = (() => {
      return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function( callback ) {
        window.setTimeout(callback, 1000 / 60);
      } 
    })();
    // 波浪大小
    const boHeight = canvas.height / 2;
    const posHeight = canvas.height / 1.2;
    // 初始化角度为0
    let step = 0;
    // 定义三条不同波浪的颜色
    const lines = ["rgba(0,222,255, 0.2)", "rgba(157,192,249, 0.2)", "rgba(0,168,255, 0.2)"];
    
    function loop() {
      // 清楚canvas内容
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      step++;
      // 画3个不同颜色的矩形
      for (let j = lines.length - 1; j >= 0; j--) {
        ctx.fillStyle = lines[j];
        // 每个矩形的角度都不同，每个之间相差45度
        const angle = (step + j * 50) * Math.PI / 180;
        const deltaHeight = Math.sin(angle) * boHeight;
        const deltaHeightRight = Math.cos(angle) * boHeight;
        
        ctx.beginPath();
        ctx.moveTo(0, posHeight + deltaHeight);
        ctx.bezierCurveTo(canvas. width / 2, posHeight + deltaHeight - boHeight, canvas.width / 2, posHeight + deltaHeightRight - boHeight, canvas.width, posHeight + deltaHeightRight);
        ctx.lineTo(canvas.width, canvas.height);
        ctx.lineTo(0, canvas.height);
        ctx.lineTo(0, posHeight + deltaHeight);
        ctx.closePath();
        ctx.fill();
      }

      requestAnimationFrame(loop);
    }

    loop();
  }

  useEffect(() => {
    initWater();
  }, [])

  return (
    <div className='indexContainer'>
      <div className='headerWrapper'>
        <header>
          <div className='container'>
            <Link to='/'>
              <img src={Logo} alt='logo' className='logo' />
            </Link>
            <ListsMenus/>
          </div>
        </header>
      </div>
      <div className='mainWrapper'>
        <div>
          <div className='banner'>
            <div className='banner-bg'>
              <ul>
                <li/>
                <li/>
                <li/>
                <li/>
                <li/>
                <li/>
                <li/>
                <li/>
                <li/>
                <li/>
              </ul>
            </div>
            <div className='banner-desc'>
              <h1>Winkey UI</h1>
              <p>WinkeyUI, 一套为开发者、设计师和产品经理准备的基于React的企微端组件库</p>
              <p>企业级产品设计体系，创造高效愉悦的工作体验</p>
              <p className='banner-btn'>

              </p>
            </div>
          </div>
          <div className='cards'>
            <h2>设计语言与研发框架</h2>
            <ul>
              {
                cards.map(i => {
                  return (
                    <li key={i.id}>
                      <Link to={i.url}>
                        <div className='card'>
                          <img src={i.imgUrl} alt="card"/>
                          {i.title}
                          <p>{i.description}</p>
                          <div className='btn'>
                            <span>查看详情</span>
                          </div>
                        </div>
                      </Link>
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </div>
      </div>
      <div className='footerWrapper'>
        <div className='container'>
          <p>Love is Eternal😋</p>
          <p>Dedicated to every hardworking people</p>
        </div>
      </div>
      <canvas style={{position: 'fixed', bottom: '0', zIndex: 0, height: '100px', width: '100%'}} ref={CanvasRef}></canvas>
    </div>
  )
}

export default Index;