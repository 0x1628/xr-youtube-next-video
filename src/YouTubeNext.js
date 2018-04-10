import React from 'react'
import defaultLocale from './locale/en_US'

class YouTubeNext extends React.Component {
  static girth = 211

  static defaultProps = {
    onNext() {
    },
    onCancel() {
    },
    locale: defaultLocale,
    prefixCls: 'YouTubeNextVideo',
    timeout: 5000,
  }

  state = {
    percent: 0,
    stop: false,
  }

  componentDidMount() {
    this.moutedTime = Date.now()

    this.count()
  }

  count = () => {
    if (this.state.stop) {
      return
    }
    window.requestAnimationFrame(() => {
      const tmPass = Date.now() - this.moutedTime
      const percent = tmPass / this.props.timeout
      if (percent > 1) {
        this.handleNext()
      } else {
        this.setState({percent})
        this.count()
      }
    })
  }

  handleNext = () => {
    this.setState({stop: true})
    this.props.onNext()
  }

  handleCancel = () => {
    this.setState({stop: true})
    this.props.onCancel()
  }

  render() {
    const {
      prefixCls, locale, title,
      author,
    } = this.props
    const {percent, stop} = this.state
    const offset = stop ? YouTubeNext.girth : (1 - percent) * YouTubeNext.girth

    return (
      <div className={prefixCls}>
        <div className={`${prefixCls}-Next`}>{locale.next}</div>
        <div className={`${prefixCls}-Title`}>{title}</div>
        <div className={`${prefixCls}-Author`}>{author}</div>
        <button
          className={`${prefixCls}-NextButton`}
          onClick={this.handleNext}
        >
          <svg viewBox="0 0 72 72" width="100%">
            <circle
              cx="36"
              cy="36"
              fill="#fff"
              fillOpacity="0.3"
              r="31.5"
            />

            <circle
              cx="-36"
              cy="36"
              fillOpacity="0"
              r="33.5"
              stroke="#fff"
              strokeDasharray={YouTubeNext.girth}
              strokeDashoffset={offset}
              strokeWidth="4"
              transform="rotate(-90)"
            />
            <path
              d="M 24,48 41,36 24,24 V 48 z M 44,24 v 24 h 4 V 24 h -4 z"
            />
          </svg>
        </button>
        <button
          className={`${prefixCls}-CancelButton`}
          onClick={this.handleCancel}
        >
          {locale.cancel}
        </button>
      </div>
    )
  }
}

export default YouTubeNext
