import './Breadcrumb.scss'
const Breadcrumb = ({categories}) => {
    return (
        <div className="breadcrumb-content">
            {categories.join(' > ')}
        </div>
    );
}

export default Breadcrumb;