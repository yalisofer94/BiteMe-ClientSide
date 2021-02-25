import React from 'react';
import GamesCard from './GameCard';
import PersistentDrawerLeft from './Navbar';
import Axios from "axios";

class GamesListing extends React.Component{
    constructor(props){
        super(props);
        this.state = { 
           games: [],
           loading: false
        }
        this.onDelete = this.onDelete.bind(this);  
    }

    componentDidMount(){
            this.setState({loading:true})
            Axios({
                method: "GET",
                withCredentials: true,
                url: "https://bite-me-app1.herokuapp.com/api/game/all",
            }).then((res) => {
                if (res.status === 200) {
                    console.log(res.data[0].game)
                    let theArr = [...res.data]
                    this.setState(prevState => ({
                      games: theArr,
                      loading:false
                    }))
                }
            }).catch(err => console.log(err)); 
      }

      onDelete = (id) => {
        const { history } = this.props;
        Axios({
            method: "DELETE",
            withCredentials: true,
            url: `https://bite-me-app1.herokuapp.com/api/game/${id}`,
        }).then((res) => {
            if (res.status === 200) {
                console.log(res.data)
                const newGames = this.state.games.filter(
                    (game) => game.id !== id
                  );
                  this.setState({
                    games: newGames
                })
                history.push('/DeleteSuccess');
            }
        }).catch(err => console.log(err));
      }
    render(){
    return (
      <>
    <PersistentDrawerLeft admin={localStorage.isAdmin} username={localStorage.userName}/>
    {this.state.loading ? <h2>Loading</h2> :
    <div className="home-content">
      {this.state.games.map((game) => (
        <GamesCard
          key={game}
          data={game}
          onDelete={this.onDelete}
        />
      ))
      }
    </div>}
    </>
  )}
};

export default GamesListing;