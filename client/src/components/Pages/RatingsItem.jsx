import React from 'react';


class RatingsItem extends React.Component {
  constructor(props) {
    super(props)


    this.state = {
      selectValue: 'Rate!',

    }
    //bind area
    this.handleChange = this.handleChange.bind(this);
  }


  handleChange(e, name) {
    console.log(name, 'please log')
    const { favorites } = this.props;
    console.log(favorites, 'iiiiiddddd')
    console.log(e.target.value, 'hello')
    this.setState({selectValue: e.target.value});
  }

  render() {
    const { favorites } = this.props;
  return (
    <div>
      <ol className="list-group ">

            <li key={this.props.fav._id} className="list-group-item d-flex justify-content-between align-items-start" >
              <div className="ms-2 me-auto">
                <div className="fw-bold">{this.props.fav.name}</div>
                {this.props.fav.location.lat}
                <br />
                {this.props.fav.location.lng}
                <br />
                <label htmlFor={this.props.fav._id}>
                Rate Trail:
                <select
                        //onClick={(e) => this.handleClick(e, fav.name)}
                        defaultValue={this.state.selectValue}
                        onChange={ this.handleChange}>
                <option value="⭐">1 Star</option>
                <option value="⭐⭐">2 Stars</option>
                <option value="⭐⭐⭐">3 Stars</option>
                <option value="⭐⭐⭐⭐">4 Stars</option>
                <option value="⭐⭐⭐⭐⭐">5 Stars</option>
                </select>
                </label>
                  <div className="form-group form-check">
                    <input type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                    />
                    <label
                    className="form-check-label"
                    htmlFor="exampleCheck1">Visited!</label>
                  </div>
              </div>
          <span key={this.props.fav._id}  value={this.props.fav.name} onChange={() => this.handleChange(this.props.fav.name)} className="badge bg-primary rounded-pill">{ this.state.selectValue }</span>
            </li>
      </ol>
    </div>

  );
      };
};
export default RatingsItem;
