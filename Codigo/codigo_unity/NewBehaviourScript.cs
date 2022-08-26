using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class NewBehaviourScript : MonoBehaviour
{

    public float Speed;
    public float JumpForce;
    private Rigidbody2D rig;
    public bool isJumping;
    Animator anim;
    public bool isMoving;

    // Start is called before the first frame update
    void Start()
    {
        rig = GetComponent<Rigidbody2D>();
        anim = GetComponent<Animator>();
    }

    // Update is called once per frame
    void Update()
    {
        Move();
        Jump();
    }

    void Move()
    {
        Vector3 movement = new Vector3(Input.GetAxis("Horizontal"), 0f, 0f);
        transform.position += movement * Time.deltaTime * Speed;
        
        //Direita
        if(Input.GetAxis("Horizontal") > 0f) {
            anim.SetBool("run", true);
            transform.eulerAngles = new Vector3(0f,0f,0f);
        }

        //Esquerda
        if(Input.GetAxis("Horizontal") < 0f) {
            anim.SetBool("run", true);
            transform.eulerAngles = new Vector3(0f,180f,0f);
        }

        //Parado
        if(Input.GetAxis("Horizontal") == 0f) {
            anim.SetBool("run", false);
        }
    }

    void Jump()
    {
        //Debug.Log; 
        if(Input.GetButtonDown("Jump") && isJumping == false)
        {
        rig.AddForce(new Vector2(0f, JumpForce), ForceMode2D.Impulse);
        isJumping = true;
        anim.SetBool("jump", true);
        }

        else
        {
        }
    }

    private void OnCollisionEnter2D(Collision2D collision)
    {
        if(collision.gameObject.tag == "isJumping")
        {
            anim.SetBool("jump", false);
            isJumping = false;
        }
    }
}
