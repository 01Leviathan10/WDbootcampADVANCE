import './App.css';
import React, {Component} from 'react';
import PropTypes from 'prop-types';


const InstructorItem = props => {
        return(
            <li>
                <h3>{props.name}</h3>
                <h4>
                    Hobbies: {props.hobbies.join(", ")}
                </h4>
            </li>
        );
    }

InstructorItem.propTypes ={
    name: PropTypes.string,
    hobbies: PropTypes.arrayOf(PropTypes.string)
}

class Apps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      instructors: [
         {
          name: "Marko",
          hobbies: ["sailing", "react"]
        },
        {
          name: "Dejan",
          hobbies: ["GYM", "JS"]
        },
        {
          name: "Zdravko",
          hobbies: ["sprint", "PHP"]
        },
        {
          name: "Sreta",
          hobbies: ["sprint", "react-native"]
        }
      ]
    };
    setTimeout(() => {
        const randInst = Math.floor(
            Math.random()* 
            this.state.instructors.length
        );
        const hobbyIndex = Math.floor(
            Math.random()*
            this.state.instructors[randInst].length 
        );
        const instructors = this.state.instructors.map((inst, i) => {
            if (i === randInst) {
                const hobbies = [...inst.hobbies];
                hobbies.splice(hobbyIndex, 1);
                return {
                    ...inst,
                    hobbies
                };
            }
            return inst;
        });
        this.setState({instructors});
    }, 5000);
  }


    render() {
        const instructors = this.state.instructors.map((instructors, index) => (
            <InstructorItem 
            key={index}
            name = {instructors.name}
            hobbies = {instructors.hobbies} 
            />
        ));
        return (
         <div>
            <ul>
                {instructors}
            </ul>
         </div>
        );
    }
}

export default Apps;
