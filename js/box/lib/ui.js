define(function() {
    'use strict';    
    return {
        style:{
            WebkitUserSelect: 'none',
            cursor: 'default',
            backgroundColor: '#ececec',
            display: 'flex',
            flexDirection: 'column',
            borderTopLeftRadius: '4px',
            borderTopRightRadius: '4px',
            borderBottomLeftRadius: '4px',
            borderBottomRightRadius: '4px',
            boxShadow:
                '0 0 1px rgba(0, 0, 0, .26), ' + // Border
                '0 0 5px rgba(0, 0, 0, .16), ' + // Small Glow
                '0 8px 10px rgba(0, 0, 0, .06), ' + // Bottom Glow
                '0 25px 65px rgba(0, 0, 0, .48) ' // Big shadow
        },
        titleBar: {
            WebkitUserSelect: 'none',
            WebkitAppRegion: 'drag',
            cursor: 'default',
            display: 'flex',
            alignItems: 'center',
            height: '20px',
            backgroundImage: '-webkit-linear-gradient(top, #ededed 0, #ededed 1px, #e7e7e7 2px, #d1d1d1 100%)',
            borderBottomWidth: '1px',
            borderBottomStyle: 'solid',
            borderBottomColor: '#afafaf',
            borderTopWidth: '1px',
            borderTopStyle: 'solid',
            borderTopColor: '#f6f6f6',
            borderTopLeftRadius: '5px',
            borderTopRightRadius: '5px',
            paddingLeft: '3px',
            paddingRight: '3px'
        },
        content: {
            WebkitUserSelect: 'none',
            cursor: 'default',
            backgroundColor: 'rgba(0, 0, 0, .04)',
            borderWidth: '1px',
            borderStyle: 'solid',
            borderTopColor: 'rgba(0, 0, 0, .07)',
            borderLeftColor: 'rgba(0, 0, 0, .037)',
            borderRightColor: 'rgba(0, 0, 0, .037)',
            borderBottomColor: 'rgba(0, 0, 0, .026)',
            borderRadius: '0 0 4px',
            position: 'relative',
            padding: '23px 18px 22px 18px'
        }
    }
});