import React,{Component} from 'react';
class Bundle extends Component{
	state={mod:null}
	componentWillMount() {
		this.props.load((mod)=>{
			this.setState({mod:mod})
		})
	}
	render(){
		let mod=this.state.mod;
		if(!mod)return <div>load</div>;
		return <mod.default {...this.props} />
	}
}

const getComponent=(com)=>{
	return (props)=><Bundle {...props} load={com} />;
}
export default getComponent