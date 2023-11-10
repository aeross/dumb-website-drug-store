export default function CategoriesAdd() {
    const [name, setName] = useState("");
    function nameOnChange(event) {
        setName(event.target.value);
    }
}
