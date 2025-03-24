import './index.css'

import {Component} from 'react'

const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

//Component
let Item = props => {
  let {data, deleteFunction} = props
  let {id, timeAccessed, logoUrl, title, domainUrl} = data
  let deleteFun = () => {
    deleteFunction(id)
  }
  return (
    <li className="list">
      <div className="info">
        <p className="timeHeading">{timeAccessed}</p>
        <div className="infoText">
          <img src={logoUrl} alt="domain logo" className="iconImg" />
          <p className="heading1">{title}</p>
          <p className="paragraph">{domainUrl}</p>
        </div>
      </div>
      <button
        type="button"
        className="button"
        onClick={deleteFun}
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="deleteImg"
        />
      </button>
    </li>
  )
}

// Replace your code here
class BrowserHistory extends Component {
  state = {originalData: initialHistoryList, searchValue: ''}

  changeFunction = event => {
    this.setState({searchValue: event.target.value})
  }

  deleteFunction = id => {
    let {originalData} = this.state
    let filteredData = originalData.filter(data => {
      return data.id !== id
    })
    this.setState({originalData: filteredData})
  }

  render() {
    let {originalData, searchValue} = this.state
    let filteredData = originalData.filter(data => {
      return data.title.toLowerCase().includes(searchValue.toLowerCase())
    })
    return (
      <div className="mainDiv">
        <div className="headerDiv">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
          />
          <div className="searchBox">
            <button type="button" className="searchButton">
              <img
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                alt="search"
              />
            </button>
            <input
              type="search"
              placeholder="Search History"
              className="searchInput"
              onChange={this.changeFunction}
            />
          </div>
        </div>
        <div className="bodyDiv">
          <ul className="ul">
            {filteredData.map(data => {
              return (
                <Item
                  key={data.id}
                  data={data}
                  deleteFunction={this.deleteFunction}
                />
              )
            })}
          </ul>
        </div>
        <div className="center">
          {filteredData.length === 0 ? (
            <p>There is no history to show</p>
          ) : null}
        </div>
      </div>
    )
  }
}

export default BrowserHistory
