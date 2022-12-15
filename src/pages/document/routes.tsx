import { Navigate } from 'react-router-dom'
import { RoutesStruct } from '../router'
import ButtonPage from './pages/button'

export const routes: RoutesStruct[] = [
  {
    index: true,
    path: '/button',
    name: 'button文档',
    element: <ButtonPage />
  },
  {
    path: '*',
    element: <Navigate to='button' />
  }
]

/* <Route exact path='/components/icon' component={IconPage} />
<Route exact path='/components/divider' component={DividerPage} />
<Route exact path='/components/gird' component={GirdPage} />
<Route exact path='/components/space' component={SpacePage} />
<Route exact path='/components/card' component={CardPage} />
<Route exact path='/components/avatar' component={AvatarPage} />
<Route exact path='/components/image' component={ImagePage} />
<Route exact path='/components/list' component={ListPage} />
<Route exact path='/components/checkbox' component={CheckboxPage} />
<Route exact path='/components/radio' component={RadioPage} />
<Route exact path='/components/input' component={InputPage} />
<Route exact path='/components/switch' component={SwitchPage} />
<Route exact path='/components/tag' component={TagPage} />
<Route exact path='/components/select' component={SelectPage} />
<Route exact path='/components/popconfirm' component={PopconfirmPage} />
<Route exact path='/components/message' component={MessagePage} />
<Route exact path='/components/empty' component={EmptyPage} />
<Route exact path='/components/pickerview' component={PickerViewPage} />
<Route exact path='/components/picker' component={PickerPage} />
<Route exact path='/components/timepicker' component={TimePickerPage} />
<Route exact path='/components/datepicker' component={DatePickerPage} />
<Route exact path='/components/form' component={FormPage} />
<Route exact path='/components/breadcrumb' component={BreadcrumbPage} />
<Route exact path='/components/pageheader' component={PageHeaderPage} />
<Route exact path='/components/menu' component={MenuPage} />
<Route exact path='/components/tabs' component={TabsPage} />
<Route exact path='/components/toast' component={ToastPage} />
<Route exact path='/components/steps' component={StepsPage} />
<Route exact path='/components/spin' component={SpinPage} />
<Route exact path='/components/editor' component={EditorPage} />
<Route exact path='/components/dropdown' component={DropdownPage} />
<Route exact path='/components/upload' component={UploadPage} />
<Route exact path='/components/modal' component={ModalPage} />
<Route exact path='/components/skeleton' component={SkeletonPage} />
<Route exact path='/components/tooltip' component={TooltipPage} />
<Route exact path='/components/result' component={ResultPage} />
<Route exact path='/components/table' component={TablePage} />
<Route exact path='/components/tree' component={TreePage} />
<Route exact path='/components/inputnumber' component={InputNumberPage} /> */
