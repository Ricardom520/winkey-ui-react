import React, { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'

import Logo from '@/assets/images/logo.png'
import ListsMenus from './ListsMenus'

const GuidePage: React.FC = () => {
  const CanvasRef: React.LegacyRef<HTMLCanvasElement> = useRef()

  const initWater = () => {
    // 获取canvas容器
    const canvas = CanvasRef.current
    // 获得画笔
    const ctx = canvas.getContext('2d')
    //如果浏览器支持requestAnimFrame则使用requestAnimFrame否则使用setTimeout
    const requestAnimationFrame = (() => {
      return (
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        function (callback) {
          window.setTimeout(callback, 1000 / 60)
        }
      )
    })()
    // 波浪大小
    const boHeight = canvas.height / 2
    const posHeight = canvas.height / 1.2
    // 初始化角度为0
    let step = 0
    // 定义三条不同波浪的颜色
    const lines = ['rgba(0,222,255, 0.2)', 'rgba(157,192,249, 0.2)', 'rgba(0,168,255, 0.2)']

    function loop() {
      // 清楚canvas内容
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      step++
      // 画3个不同颜色的矩形
      for (let j = lines.length - 1; j >= 0; j--) {
        ctx.fillStyle = lines[j]
        // 每个矩形的角度都不同，每个之间相差45度
        const angle = ((step + j * 50) * Math.PI) / 180
        const deltaHeight = Math.sin(angle) * boHeight
        const deltaHeightRight = Math.cos(angle) * boHeight

        ctx.beginPath()
        ctx.moveTo(0, posHeight + deltaHeight)
        ctx.bezierCurveTo(
          canvas.width / 2,
          posHeight + deltaHeight - boHeight,
          canvas.width / 2,
          posHeight + deltaHeightRight - boHeight,
          canvas.width,
          posHeight + deltaHeightRight
        )
        ctx.lineTo(canvas.width, canvas.height)
        ctx.lineTo(0, canvas.height)
        ctx.lineTo(0, posHeight + deltaHeight)
        ctx.closePath()
        ctx.fill()
      }

      requestAnimationFrame(loop)
    }

    loop()
  }

  useEffect(() => {
    initWater()
  }, [])

  return (
    <div className='indexContainer'>
      <div className='headerWrapper'>
        <header>
          <div className='container'>
            <Link to='/'>
              <img src={Logo} alt='logo' className='logo' />
            </Link>
            <ListsMenus />
          </div>
        </header>
      </div>
      <div className='mainWrapper'>
        <div>
          <div className='banner'>
            <div className='banner-bg'>
              <ul>
                <li />
                <li />
                <li />
                <li />
                <li />
                <li />
                <li />
                <li />
                <li />
                <li />
              </ul>
            </div>
            <div className='banner-desc'>
              <h1>Winkey UI</h1>
              <p>WinkeyUI, 一套为开发者、设计师和产品经理准备的基于React的企微端组件库</p>
              <p>企业级产品设计体系，创造高效愉悦的工作体验</p>
            </div>
          </div>
          <div className='cards'>
            <h2>快速上手</h2>
            <div>
              <h3 className='cards-title'>安装</h3>
              <p className='cards-guide-p1'>使用npm或yarn安装</p>
              <p className='cards-guide-p2'>
                我们推荐使用 npm 或 yarn
                的方式进行开发，不仅可在开发环境轻松调试，也可放心地在生产环境打包部署使用，享受整个生态圈和工具链带来的诸多好处。
              </p>
              <div className='cards-guide-code'>$ npm install winkey-ui-react --save</div>
              <div className='cards-guide-code'>$ yarn add winkey-ui-react</div>
            </div>
          </div>
        </div>
      </div>
      <div className='footerWrapper'>
        <div className='container'>
          <p>Love is Eternal😋</p>
          <p>Dedicated to every hardworking people</p>
        </div>
      </div>
      <canvas
        style={{
          position: 'fixed',
          bottom: '0',
          zIndex: 0,
          height: '100px',
          width: '100%'
        }}
        ref={CanvasRef}
      ></canvas>
    </div>
  )
}

export default GuidePage
