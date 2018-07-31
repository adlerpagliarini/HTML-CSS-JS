interface ICrud
{
        ValidData();
        SaveData();
        UpdateData();
        SelectData();
        DeleteData();
        SendEmail();
}

class RegisterUser implements ICrud
{
    ValidData() { /**/ }    
    SaveData() { /**/ }    
    UpdateData() { /**/ }    
    SelectData() { /**/ }    
    DeleteData() { /**/ }    
    SendEmail() { /**/ }    

}

class RegisterProduct implements ICrud
{
    ValidData() { /**/ }    
    SaveData() { /**/ }    
    UpdateData() { /**/ }    
    SelectData() { /**/ }    
    DeleteData() { /**/ }   
    SendEmail() {
        throw new Error("Method not implemented.");
    }
}
/********************************************************************/
interface ICrudOk
{
        ValidData();
        SaveData();
        UpdateData();
        SelectData();
        DeleteData();
}
interface INotification
{
    SendEmail();
}

class RegisterUserOk implements ICrudOk, INotification
{
    ValidData() { /**/ }    
    SaveData() { /**/ }    
    UpdateData() { /**/ }    
    SelectData() { /**/ }    
    DeleteData() { /**/ }    
    SendEmail() { /**/ }    
}

class RegisterProductOK implements ICrudOk
{
    ValidData() { /**/ }    
    SaveData() { /**/ }    
    UpdateData() { /**/ }    
    SelectData() { /**/ }    
    DeleteData() { /**/ }   
}
