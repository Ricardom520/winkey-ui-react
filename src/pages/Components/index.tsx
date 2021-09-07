import React, { useEffect, useState } from 'react';
import { Link, Switch, Route, Redirect } from 'react-router-dom';

import { menus } from './datas';
import ListsMenus from '../ListsMenus';
import ButtonPage from './Button';
import IconPage from './Icon';
import DividerPage from './Divider';
import GirdPage from './Grid';
import SpacePage from './Space';
import CardPage from './Card';
import AvatarPage from './Avatar';
import ImagePage from './Image';
import ListPage from './List';
import CheckboxPage from './Checkbox';
import RadioPage from './Radio';
import InputPage from './Input';
import SwitchPage from './Switch';
import TagPage from './Tag';
import SelectPage from './Select';
import PopconfirmPage from './Popconfirm';
import MessagePage from './Message';
import EmptyPage from './Empty';
import PickerViewPage from './PickerView';
import PickerPage from './Picker';
import TimePickerPage from './TimePicker';
import DatePickerPage from './DatePicker';
import FormPage from './Form';
import BreadcrumbPage from './Breadcrumb';
import PageHeaderPage from './PageHeader';
import MenuPage from './Menu';
import TabsPage from './Tabs';
import ToastPage from './Toast';
import StepsPage from './Steps';
import SpinPage from './Spin';
import EditorPage from './Editor';
import DropdownPage from './Dropdown';
import UploadPage from './Upload';
import ModalPage from './Modal';
import SkeletonPage from './Skeleton';
import Logo from '@/assets/images/logo.png';
import Search from '@/assets/icons/search.svg';
import './index.less';

interface RoomsProps {
  history: any;
}

const Rooms: React.SFC<RoomsProps> = (props) => {
  const { history } = props;
  const [type, setType] = useState<string>('');

  useEffect(() => {
    setType(history.location.pathname.split('/components')[1]);
  }, [])
  
  return (
    <div className='componentContainer'>
      <header>
        <div className='logo'>
          <Link to='/'>
            <img src={Logo} alt='logo' />
          </Link>
        </div>
        <div style={{display: 'flex', justifyContent: 'space-between', width: '100%', paddingRight: '100px'}}>
          <div className='find'>
            <img src={Search} alt='find' />
            <input type='text' placeholder='搜索文档' />
          </div>
          <ListsMenus/>
        </div>
      </header>
      <div className='box'>
        <div className='left'>
          <div className='content'>
            {
              menus.map((i, n)=>{
                return (
                  <ul key={`${i.title}-${n}`}>
                    <div className='title'>
                      <p>{i.title}</p>
                    </div>
                    <div className='desc'>
                      {
                        i.lists.map(j => {
                          return (
                            <li key={j.id} style={{display: j.hidden ? 'none' : 'block'}} className={type === j.url ? 'active': ''}>
                              <Link to={`/components${j.url}`}>{j.title}</Link>
                            </li>
                          )
                        })
                      }
                    </div>
                  </ul>
                )
              })
            }
          </div>
        </div>
        <div className='right'>
          <div className='content'>
            <Switch>
              <Route exact path="/components/button" component={ButtonPage} />
              <Route exact path="/components/icon" component={IconPage} />
              <Route exact path="/components/divider" component={DividerPage} />
              <Route exact path="/components/gird" component={GirdPage} />
              <Route exact path="/components/space" component={SpacePage} />
              <Route exact path="/components/card" component={CardPage} />
              <Route exact path="/components/avatar" component={AvatarPage} />
              <Route exact path="/components/image" component={ImagePage} />
              <Route exact path="/components/list" component={ListPage}/>
              <Route exact path="/components/checkbox" component={CheckboxPage}/>
              <Route exact path="/components/radio" component={RadioPage}/>
              <Route exact path="/components/input" component={InputPage} />
              <Route exact path="/components/switch" component={SwitchPage} />
              <Route exact path="/components/tag" component={TagPage}/>
              <Route exact path="/components/select" component={SelectPage} />
              <Route exact path="/components/popconfirm" component={PopconfirmPage} />
              <Route exact path="/components/message" component={MessagePage} />
              <Route exact path="/components/empty" component={EmptyPage} />
              <Route exact path="/components/pickerview" component={PickerViewPage} />
              <Route exact path="/components/picker" component={PickerPage} />
              <Route exact path="/components/timepicker" component={TimePickerPage} />
              <Route exact path="/components/datepicker" component={DatePickerPage} />
              <Route exact path="/components/form" component={FormPage} />
              <Route exact path="/components/breadcrumb" component={BreadcrumbPage} />
              <Route exact path="/components/pageheader" component={PageHeaderPage} />
              <Route exact path="/components/menu" component={MenuPage} />
              <Route exact path="/components/tabs" component={TabsPage} />
              <Route exact path="/components/toast" component={ToastPage} />
              <Route exact path="/components/steps" component={StepsPage} />
              <Route exact path="/components/spin" component={SpinPage} />
              <Route exact path="/components/editor" component={EditorPage} />
              <Route exact path="/components/dropdown" component={DropdownPage} />
              <Route exact path="/components/upload" component={UploadPage} />
              <Route exact path="/components/modal" component={ModalPage} />
              <Route exact path="/components/skeleton" component={SkeletonPage} />
              <Redirect to="/components/button" />
            </Switch>
          </div>
          <div className='aside-container'>
            <div className='aside-demo'>
              <div style={{width: '337px', height: '620px'}}>
                <div className='demo-mobile'>
                  <div className='demo-preview-wrapper'>
                    <div className='demo-preview-header'>
                      <div className='demo-preview-statbar'>
                        <img width="350px" style={{margin: '0 2px'}} src="https://os.alipayobjects.com/rmsportal/VfVHYcSUxreetec.png" alt='presentation' />
                      </div>
                      <div style={{height: '40px'}}>
                        <div className='url-box'>
                          https://blue.planplus.cn/winkey-ui/components/button
                        </div>
                      </div>
                    </div>
                    <div className='code-box-demo'>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Rooms;