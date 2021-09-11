import PropTypes from 'prop-types';
import { Wrapper, UserOpt, UserLink, Avatar, Divider } from './Styled';


const More = (props) => {
    const { users, moreOptions } = props;

    return(
        <Wrapper>
            <UserOpt>
                {users.map((u) => {
                    return (
                    <UserLink key={`user ${u.id}`} >
                        <Avatar src={u.picture} 
                                alt={`${u.name} avatar`}/>
                        <p>{u.name}</p>
                    </UserLink>);
                })}
            
                <span>Gerenciar Perfis</span>
                <Divider />
                {moreOptions.map((el, i) => <span key={i}><b>{el}</b></span>)}
            </UserOpt>
        </Wrapper>
    );
}

More.propTypes = {
    users: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        picture: PropTypes.string,
        active: PropTypes.bool
    })),

    moreOptions: PropTypes.arrayOf(PropTypes.string)
}


export default More;