1.setState：更新状态
如果新状态不依赖于原状态，使用对象方式，如果新状态依赖于原状态，使用函数方式。如果在setState()执行之后获取最新的状态数据，要在第二callback获取函数获取
对象：this.setState({count:count+1},()=>{回调函数获取最新的值})
函数：this.setState(state=>({count:state.count+1}))

2.lazyLoad：懒加载，如果项目很大就使用懒加载  npm add react-route-dom
使用定义变量的形式引入路由组件：const Home = lazy(()=>{import('./Home')})
如果组件长时间没有加载的时候，<Suspense fallback={<h1>loading</h1>}>  中间包含注册路由 <Route>   </Suspense>

3.Hooks： 在函数组件中使用新特性，生命周期
React.useState()：使用状态setxxx(value => newValue): 参数为函数，接收原本的状态值，返回新的状态值，内部用其覆盖原来的状态值
React.useEffect(()=>{ 数据变动方法  return (页面willUnmounted的时候调用方法) },[监听的数据]): 监听组件功能挂载调用，数据发生变化的时候自动调用，可以看作三个生命周期： componentDidMount()  componentDieUpdate()    componentzWillUnMount()
React.useRef(): 可以获取到标签数据

4.Fragment  <Fragment></Fragment> 可以不用使用一个跟标签了

5.context：组件间通信的方式：祖组件和子组件通信。一般不使用
    创建组件：const xxx = React.createContext
    渲染子组件的时候：外面包裹xxx.Provider，通过value属性传递值
    后代读取值得方式：<xxx.Consumer>{value=({    操作得Value值   })}</xxx.Consumer>

6.optimize：组件优化，只有当组件得state或者props数据发生变化得时候，才会重新render  
原因：Component中的shouldComponentUpdate总是返回true
方法1： 重写shouldCpmponentUpdate(),比较数据前后比较
方法2：使用purComponent。

7.rederProps：标签体之内的内容，在后代中可以根据this.props.children来获取
父组件中：<A render={(name => {<B name = {name}></B>})}
A组件中： <div>
            <h3>A 组件</h3>
            {this.props/.render(name)}
        </div>
B组件中：<div>
            <h3>{this.props.name}</h3>
        </div>

8.错误边界：用来捕获后代组件，如果有错误的话就使用备用组件
staic getDerivedStateFromError：当子主键报错的时候，会调用并携带错误信息。通过方法参数获取到是否是错误。只适用于生产环境
componentDidCatch()：组件中出现错误就会调用此方法，生命周期的错误。

组件间通信方式的总结：
1.props
2.消息订阅发布：pub-sub,event
3.集中式管理，redux，dva
4.生产者消费者的模式：context
比较好的方式：父子props，兄弟：订阅发布，集中式     祖孙：发布订阅，集中式，context

Route6最近版本：





